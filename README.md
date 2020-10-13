 
# POC LERNA

- Cree 2 proyectos completamente separados con TSDX (https://github.com/formium/tsdx)
  - lib1-compos
  - lib2-utils
- Cree monorepo con `lerna init`
- Inicialice git + 1 commit inicial
- Importe ambos proyectos al monorepo con `lerna import {PATH_PROJECT}`
  (esto tambien trae el historia de git de cada uno y lo appendea al git del monorepo)
- Genere 2 scripts base en el root del monorepo
  - `npm run bootstrap` para instalar las dependencias & hoistear las deps comunes
  - `npm run test` para correr todos los tests de los packages
- *Commands at `https://github.com/lerna/lerna/tree/master/commands`*
- La configuracion `publishConfig` parece ser por cada package
- Se guarda el commit hash de cada publish, si se quiere publicar sin nada nuevo no te deja (salvo con force)
- Flujo de agregar funcionalidad a lib2  y usarla en lib1
  - Modifico/agrego funcionalidad lib2-utils
  - Obviamente esa funcionalidad si la quiero usar en lib1 no está
  - `lerna bootstrap` (y quizas `lerna link`?) instala/linkea la dependencia
  - listo
- Se puede manejar versionado sincronizado o independiente (sincronizado siendo mas simple)

# CONCLUSIONES
- MAJOR PRO: Monorepo con muchos mini-paquetes cada uno con sus dependencias
- MAJOR PRO: Semver/publish mas estandarizado
- MAJOR CON: nuevo workflow con `add`, `bootstrap`, etc. -> Tiene su curva de aprendizaje
- MINOR CON: canary publish pincha xq detecta package.json modificados
