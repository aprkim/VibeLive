"use client";

import { useEffect, useRef } from "react";

const SVG_W = 2000;
const SVG_H = 857;

// City positions as percentages of SVG viewBox (equirectangular projection)
// x = (lon + 180) / 360 * 100, y = (90 - lat) / 180 * 100
const cities = [
  { svgX: 17.2, svgY: 32.7 },  // Los Angeles
  { svgX: 29.4, svgY: 27.4 },  // New York
  { svgX: 27.9, svgY: 25.7 },  // Toronto
  { svgX: 22.5, svgY: 39.2 },  // Mexico City
  { svgX: 29.4, svgY: 47.4 },  // Bogota
  { svgX: 37.1, svgY: 63.1 },  // São Paulo
  { svgX: 33.8, svgY: 69.2 },  // Buenos Aires
  { svgX: 50.0, svgY: 21.4 },  // London
  { svgX: 50.6, svgY: 22.8 },  // Paris
  { svgX: 53.7, svgY: 20.8 },  // Berlin
  { svgX: 58.1, svgY: 27.2 },  // Istanbul
  { svgX: 60.4, svgY: 19.0 },  // Moscow
  { svgX: 58.7, svgY: 33.3 },  // Cairo
  { svgX: 50.9, svgY: 46.4 },  // Lagos
  { svgX: 57.8, svgY: 64.6 },  // Johannesburg
  { svgX: 65.4, svgY: 35.9 },  // Dubai
  { svgX: 70.3, svgY: 39.4 },  // Mumbai
  { svgX: 82.3, svgY: 27.8 },  // Beijing
  { svgX: 85.3, svgY: 29.1 },  // Seoul
  { svgX: 88.8, svgY: 30.2 },  // Tokyo
];

interface Connection {
  from: number;
  to: number;
  life: number;
  maxLife: number;
  boxesShown: boolean;
  boxesClosing: boolean;
}

const MAX_CONNECTIONS = 3;

export default function AnimatedMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsContainerRef = useRef<HTMLDivElement>(null);
  const connectionsRef = useRef<Connection[]>([]);
  const dotElementsRef = useRef<{ el: HTMLDivElement; copy: number; cityIdx: number }[]>([]);
  const videoBoxesRef = useRef<{ el: HTMLDivElement; copy: number; cityIdx: number }[]>([]);
  const spawnTimerRef = useRef(0);
  const lastTimeRef = useRef(0);
  const positionsRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const dotsContainer = dotsContainerRef.current;
    const canvas = canvasRef.current;
    if (!dotsContainer || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create dots and video boxes for both map copies (seamless loop)
    for (let copy = 0; copy < 2; copy++) {
      cities.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = "user-dot";
        dot.style.animationDelay = i * 0.25 + "s";
        dotsContainer.appendChild(dot);
        dotElementsRef.current.push({ el: dot, copy, cityIdx: i });

        const box = document.createElement("div");
        box.className = "video-box";
        box.style.marginTop = "-10px";
        box.innerHTML =
          '<div class="video-box-inner">' +
          '<div class="video-box-icon"></div>' +
          '<span class="video-box-live">LIVE</span>' +
          "</div>";
        dotsContainer.appendChild(box);
        videoBoxesRef.current.push({ el: box, copy, cityIdx: i });
      });
    }

    function updateLayout() {
      if (!canvas || !dotsContainer) return;
      const worldMap = canvas.parentElement as HTMLElement;
      if (!worldMap) return;
      const mapContainer = worldMap.parentElement as HTMLElement;
      if (!mapContainer) return;

      const vw = mapContainer.clientWidth;
      const vh = mapContainer.clientHeight;
      const aspectRatio = SVG_W / SVG_H;

      // Cover behavior: map fills viewport in both dimensions
      let mapWidth: number, mapHeight: number;
      if (vw >= vh * aspectRatio) {
        mapWidth = vw;
        mapHeight = vw / aspectRatio;
      } else {
        // Tall screen (mobile) — zoom in wider so fewer dots visible
        mapHeight = vh * 1.4;
        mapWidth = mapHeight * aspectRatio;
      }

      const mapY = (vh - mapHeight) / 2;
      const mapX = (vw - mapWidth) / 2;

      // Set world-map width for two seamless copies
      worldMap.style.width = (mapWidth * 2) + "px";

      // Canvas covers the full track
      canvas.width = mapWidth * 2;
      canvas.height = vh;

      // Calculate pixel positions for the first copy
      const positions: { x: number; y: number }[] = [];
      cities.forEach((city) => {
        const x = mapX + (city.svgX / 100) * mapWidth;
        const y = mapY + (city.svgY / 100) * mapHeight;
        positions.push({ x, y });
      });
      positionsRef.current = positions;

      // Update all dot and video box positions
      dotElementsRef.current.forEach(({ el, copy, cityIdx }) => {
        const pos = positions[cityIdx];
        el.style.left = (copy * mapWidth + pos.x) + "px";
        el.style.top = pos.y + "px";
      });

      videoBoxesRef.current.forEach(({ el, copy, cityIdx }) => {
        const pos = positions[cityIdx];
        el.style.left = (copy * mapWidth + pos.x) + "px";
        el.style.top = pos.y + "px";
      });
    }

    updateLayout();
    window.addEventListener("resize", updateLayout);

    // --- Connection logic ---
    function pickPair() {
      let attempts = 0;
      while (attempts < 20) {
        const a = Math.floor(Math.random() * cities.length);
        const b = Math.floor(Math.random() * cities.length);
        if (a === b) { attempts++; continue; }
        const exists = connectionsRef.current.some(
          (c) => (c.from === a && c.to === b) || (c.from === b && c.to === a)
        );
        if (!exists) return { from: a, to: b };
        attempts++;
      }
      return null;
    }

    function getVideoBoxes(cityIdx: number) {
      return videoBoxesRef.current.filter((v) => v.cityIdx === cityIdx);
    }

    function spawnConnection() {
      if (connectionsRef.current.length >= MAX_CONNECTIONS) return;
      const pair = pickPair();
      if (!pair) return;
      const conn: Connection = {
        from: pair.from,
        to: pair.to,
        life: 0,
        maxLife: 4000 + Math.random() * 3000,
        boxesShown: false,
        boxesClosing: false,
      };
      connectionsRef.current.push(conn);
      setTimeout(() => {
        if (conn.life < conn.maxLife) {
          getVideoBoxes(conn.from).forEach(({ el }) => el.classList.add("visible"));
          getVideoBoxes(conn.to).forEach(({ el }) => el.classList.add("visible"));
          conn.boxesShown = true;
        }
      }, 500);
    }

    let animId: number;
    function animate(now: number) {
      if (!ctx || !canvas) return;
      const dt = now - lastTimeRef.current;
      lastTimeRef.current = now;

      spawnTimerRef.current += dt;
      if (spawnTimerRef.current > 1500 + Math.random() * 1500) {
        spawnConnection();
        spawnTimerRef.current = 0;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const connectedDots: Record<number, boolean> = {};
      const positions = positionsRef.current;
      const vw = canvas.width / 2;

      for (let i = connectionsRef.current.length - 1; i >= 0; i--) {
        const c = connectionsRef.current[i];
        c.life += dt;

        if (!c.boxesClosing && c.life >= c.maxLife * 0.75) {
          c.boxesClosing = true;
          getVideoBoxes(c.from).forEach(({ el }) => {
            el.classList.remove("visible");
            el.classList.add("closing");
          });
          getVideoBoxes(c.to).forEach(({ el }) => {
            el.classList.remove("visible");
            el.classList.add("closing");
          });
        }

        if (c.life >= c.maxLife) {
          getVideoBoxes(c.from).forEach(({ el }) => el.classList.remove("visible", "closing"));
          getVideoBoxes(c.to).forEach(({ el }) => el.classList.remove("visible", "closing"));
          connectionsRef.current.splice(i, 1);
          continue;
        }

        connectedDots[c.from] = true;
        connectedDots[c.to] = true;

        const progress = c.life / c.maxLife;
        let alpha =
          progress < 0.15
            ? progress / 0.15
            : progress > 0.75
              ? (1 - progress) / 0.25
              : 1;
        alpha *= 0.4;

        const fromPos = positions[c.from];
        const toPos = positions[c.to];
        if (!fromPos || !toPos) continue;

        // Draw connection line on both map copies
        for (let copy = 0; copy < 2; copy++) {
          const xOff = copy * vw;
          const x1 = xOff + fromPos.x;
          const y1 = fromPos.y;
          const x2 = xOff + toPos.x;
          const y2 = toPos.y;

          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2;
          const dx = x2 - x1;
          const dy = y2 - y1;
          const cpX = midX - dy * 0.15;
          const cpY = midY + dx * 0.15;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.quadraticCurveTo(cpX, cpY, x2, y2);
          ctx.strokeStyle = "rgba(14,165,164," + alpha + ")";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      dotElementsRef.current.forEach(({ el, cityIdx }) => {
        if (connectedDots[cityIdx]) {
          el.classList.add("connected");
        } else {
          el.classList.remove("connected");
        }
      });

      animId = requestAnimationFrame(animate);
    }

    spawnConnection();
    setTimeout(spawnConnection, 800);
    lastTimeRef.current = performance.now();
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateLayout);
      dotElementsRef.current.forEach(({ el }) => el.remove());
      videoBoxesRef.current.forEach(({ el }) => el.remove());
      dotElementsRef.current = [];
      videoBoxesRef.current = [];
      connectionsRef.current = [];
    };
  }, []);

  return (
    <div className="map-container">
      <div className="world-map">
        <canvas ref={canvasRef} className="map-canvas" />
        <div ref={dotsContainerRef} className="map-dots-layer" />
      </div>
      {/* Fade out center area so hero text stays readable */}
      <div className="map-center-fade" />
    </div>
  );
}
