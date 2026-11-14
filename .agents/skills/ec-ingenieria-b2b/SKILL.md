---
name: ec-ingenieria-b2b
description: Skill especializado del Copiloto IA de EC Ingeniería (arquitectura ECC v2.5) para cubicaciones preliminares B2B, licitaciones industriales, consulta de normativas QA/QC y regeneración del Dossier Corporativo PDF.
---

# EC Ingeniería — Copiloto IA de Ingeniería, Cubicación & Licitaciones B2B (ECC v2.5)

## Propósito
Esta skill equipa al agente con el contexto técnico, normativo y de diseño del portal corporativo de **EC Ingeniería** (`C:\Users\lukio\Videos\PAGINA PAPA\PAGINA PAPA`), integrando los lineamientos de `affaan-m/ECC` (`frontend-design-direction`, `design-system`, `agent-harness-construction`).

## Regla de Identidad Corporativa
- Toda comunicación representa institucionalmente a **EC Ingeniería** (nunca a nombres individuales).
- Canales oficiales: **Cobertura Nacional, Chile** | **`+56 9 2093 7495`** | **`contacto@ecingenieria.cl`**.

## Arquitectura del Agente en Vivo (`src/components/AIAgentWidget.astro`)
1. **Tab 1 — Chat Técnico & Pre-Cotizador en 3 Pasos:**
   - Flujo guiado por Especialidad, Sector Industrial y Modalidad/Urgencia, además de procesamiento de lenguaje natural para consultas sobre estructuras, piping, NFPA, electricidad SEC y paradas de planta.
2. **Tab 2 — Cubicador Paramétrico B2B:**
   - Permite ingresar la especialidad, magnitud estimada (Toneladas, metros lineales, equipos, horas) y zona geográfica de Chile para emitir al instante un **Dictamen Técnico Preliminar (`REQ-EC-XXXX`)** con marco normativo y entregables QA/QC, despachable en 1 clic a WhatsApp (`+56 9 2093 7495`) o al formulario de licitaciones (`#contacto`).
3. **Tab 3 — Inspector de Normas QA/QC & HSE:**
   - Consulta rápida de protocolos bajo `AWS D1.1`, `ASME B31.3`, `NFPA 13/14/20/24`, `NCh 2369`, `SEC Pliegos RIC` y `DS 132`.
