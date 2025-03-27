import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { type ReactNode, useState } from 'react'
import authClient from '../auth.client'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'TanStack Start Starter' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const [state, setState] = useState<'LOADING' | 'SUCCESS' | null>(null)
  const session = authClient.useSession()

  return (
    <RootDocument>
      <p>Hello{session.data?.user.name ? ` ${session.data.user.name}` : ', please click button'}</p>
      <button
        disabled={state === 'LOADING' || !!session.data?.user.name}
        onClick={() => {
          setState('LOADING')
          authClient.signIn.anonymous().then(() => setState('SUCCESS'))
        }}>
        Sign in anonymously
      </button>
      <br />
      {state === 'LOADING' && <p>Loading...</p>}
      {state === 'SUCCESS' && <p>Success</p>}
      <br />
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
