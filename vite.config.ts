import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { iconsSpritesheet } from 'vite-plugin-icons-spritesheet'

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    iconsSpritesheet({
      // Defaults to false, should it generate TS types for you
      withTypes: true,
      // The path to the icon directory
      inputDir: 'other/svg-icons',
      // Output path for the generated spritesheet and types
      outputDir: 'app/components/Icon/',
      // Output path for the generated type file, defaults to types.ts in outputDir
      typesOutputFile: 'app/components/Icon/iconnames.ts',
      // The name of the generated spritesheet, defaults to sprite.svg
      fileName: 'sprite.svg',
      // The cwd, defaults to process.cwd()
      cwd: process.cwd(),
      // What formatter to use to format the generated files, prettier or biome, defaults to no formatter
      formatter: 'prettier',
      // Callback function that is called when the script is generating the icon name
      // This is useful if you want to modify the icon name before it is written to the file
      iconNameTransformer: (iconName) => iconName,
    }),
  ],
})
