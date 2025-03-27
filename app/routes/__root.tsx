import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'
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
  // beforeLoad: async () => {
  //   const session = await authClient.getSession()
  //   return session
  // },
})

function RootComponent() {
  // const { data } = Route.useRouteContext()

  return (
    <RootDocument>
      {/* <p>Hello {data?.user.name}</p> */}
      <button onClick={() => authClient.signIn.anonymous()}>Sign in anonymously</button>
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
