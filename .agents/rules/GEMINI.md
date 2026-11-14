---
description: Reglas corporativas, técnicas y de diseño para el proyecto EC Ingeniería (Fabricación, Montaje y Mantenimiento Industrial).
---

# Reglas del Proyecto: EC Ingeniería (`ec-ingenieria-corporativo`)

## 1. Identidad Corporativa Inmutable (Solo Nombre de Empresa)
- **Empresa:** **EC Ingeniería** (Obras de Ingeniería Industrial, Proyectos, Montaje y Mantenimiento).
- **Regla Estricta de Marca:** Usar **exclusivamente** el nombre corporativo **EC Ingeniería** (o *Gerencia de Ingeniería y Operaciones — EC Ingeniería*). **Prohibido** mostrar nombres de personas naturales (como "Patricio Espinoza") en la interfaz web, agente IA o Dossier PDF.
- **Cobertura Geográfica:** `Cobertura Nacional, Chile` (despliegue en faenas mineras, portuarias, energéticas e industriales de norte a sur).
- **Teléfono / WhatsApp Oficial:** `+56 9 2093 7495` (`tel:+56920937495` / `https://wa.me/56920937495`).
- **Correo Oficial de Licitaciones y Contacto:** `contacto@ecingenieria.cl`.

## 2. Estándares Técnicos y Normativos (Ingeniería B2B)
Cualquier texto, ficha de proyecto, propuesta o respuesta del Agente IA debe respaldarse con las normativas vigentes que aplica EC Ingeniería:
- **Estructuras Metálicas y Calderería:** Diseño sísmico **NCh 2369** / **NCh 432**, aceros **ASTM A36 / A572 Gr.50**, soldadura calificada **AWS D1.1** y ensayos no destructivos (**END**: tintas penetrantes, partículas magnéticas, ultrasonido).
- **Piping Industrial y Redes Contra Incendio:** **ASME B31.3** (tuberías de proceso en Inox 304L/316L, Acero Carbono Sch 40/80 y HDPE) y **NFPA 13 / 14 / 20 / 24** para redes húmedas/secas y salas de bombas.
- **Obras Civiles Industriales:** Hormigones estructurales **H30 / H40**, pernos de anclaje **ASTM F1554**, nivelación con morteros de alta precisión (**SikaGrout 214**) y pisos industriales de alto tráfico.
- **Electricidad y Automatización:** Certificación **SEC (Trámite TE1)**, cumplimiento de **Pliegos Técnicos Normativos RIC (N°01 a N°19)**, integración de tableros de fuerza/control, **VDF** y **PLC/HMI**.
- **Seguridad en Faena:** Cumplimiento de **Ley 16.744** y **DS 132 (Reglamento de Seguridad Minera)**, procedimientos de trabajo seguro (**PTS**), matriz **IPER**, **ART** y bloqueo **LOTO**.

## 3. Sistema de Diseño Industrial (ECC Frontend Design Direction)
- **Tipografía Tripartita:**
  - `--font-heading`: `Montserrat` (`700`–`900`) para titulares estructurales.
  - `--font-sans`: `Plus Jakarta Sans` (`400`–`700`) para lectura técnica de alta legibilidad.
  - `--font-mono`: `JetBrains Mono` (`.font-mono-tech`) para códigos de obra, normativas (`AWS D1.1`, `ASME B31.3`), métricas y telemetría.
- **Superficies y Texturas:** `.bg-blueprint-grid` (retícula CAD de doble escala), `.bg-carbon-steel` (textura acero carbono oscuro con borde especular) y `.card-engineered` (bordes de precisión de `1px` con elevación multicapa).
