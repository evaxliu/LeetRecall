import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen min-w-[320px] bg-white text-slate-800 antialiased dark:bg-[#242424] dark:text-white flex items-center justify-center font-sans">
      <div className="text-center">
        <div className="mb-8 flex justify-center gap-6">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#646cff] no-underline hover:text-[#747bff] dark:hover:text-[#535bf2]"
          >
            <img
              src={viteLogo}
              alt="Vite logo"
              className="h-24 w-24"
            />
          </a>

          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#646cff] no-underline hover:text-[#747bff] dark:hover:text-[#535bf2]"
          >
            <img
              src={reactLogo}
              alt="React logo"
              className="h-24 w-24"
            />
          </a>
        </div>

        <h1 className="mb-6 text-5xl font-semibold leading-none">
          Vite + React
        </h1>

        <div className="mb-4 rounded-2xl p-6">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="rounded-lg border border-transparent bg-[#f9f9f9] px-5 py-2.5 text-base font-medium text-black transition-colors hover:border-[#646cff] focus:outline-4 focus:outline-auto dark:bg-[#1a1a1a] dark:text-white"
          >
            count is {count}
          </button>

          <p className="mt-4">
            Edit <code className="rounded bg-black/5 px-1 py-0.5 dark:bg-white/10">src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App