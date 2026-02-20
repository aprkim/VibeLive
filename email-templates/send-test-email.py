#!/usr/bin/env python3
"""
Send a test email using the VibeLive project key HTML template.
Uses Gmail SMTP (free). Requires a Gmail App Password.

Setup:
  1. Go to https://myaccount.google.com/apppasswords
  2. Generate an App Password (select "Mail")
  3. Run: python3 send-test-email.py

Usage:
  python3 send-test-email.py
  python3 send-test-email.py --template email-project-key.html
  python3 send-test-email.py --to someone@example.com
"""

import smtplib
import argparse
import getpass
import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def send_email(sender, recipient, app_password, template_path):
    # Read template
    with open(template_path, "r", encoding="utf-8") as f:
        html = f.read()

    # Replace placeholder with landing page URL
    html = html.replace("{{PROJECT_KEY_URL}}", "https://home.vibelive.site/project-key.html")

    # Build message
    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Your VibeLive Project Key"
    msg["From"] = sender
    msg["To"] = recipient

    # Plain text fallback
    plain = (
        "Your VibeLive Project Key Is Ready\n\n"
        "Click the link below to securely view your Project Key.\n"
        "For security, this link expires in 10 minutes.\n\n"
        "(This is a test email — the link is a placeholder.)\n"
    )
    msg.attach(MIMEText(plain, "plain"))
    msg.attach(MIMEText(html, "html"))

    # Send via Gmail SMTP
    print(f"\nSending to {recipient}...")
    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(sender, app_password)
        server.sendmail(sender, recipient, msg.as_string())

    print("Sent! Check your inbox (and spam folder).")


if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))

    parser = argparse.ArgumentParser(description="Send a test VibeLive email")
    parser.add_argument("--from", dest="sender", help="Gmail sender address")
    parser.add_argument("--to", dest="recipient", help="Recipient address")
    parser.add_argument(
        "--template",
        default="email-project-key1.html",
        help="HTML template file (default: email-project-key1.html)",
    )
    args = parser.parse_args()

    sender = args.sender or input("Your Gmail address: ").strip()
    recipient = args.recipient or input(f"Send to [{sender}]: ").strip() or sender
    app_password = getpass.getpass("Gmail App Password: ").replace("\xa0", " ").replace(" ", "").strip()

    template_path = os.path.join(script_dir, args.template)
    if not os.path.exists(template_path):
        print(f"Error: template not found at {template_path}")
        exit(1)

    send_email(sender, recipient, app_password, template_path)
