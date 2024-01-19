import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/mode-toggle'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card'
import { Payment, columns } from './components/sample-table/columns'
import { DataTable } from './components/sample-table/data-table'

function App() {
  const data: Payment[] = [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'a@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'bm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'cm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'dm@example.com',
    },
  ]

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='container-full flex'>
        <div className='ml-auto p-4'>
          <ModeToggle />
        </div>
      </div>
      <div className='container-full p-3'>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
          <CardFooter>
            <Button>Button</Button>
          </CardFooter>
        </Card>
      </div>
    </ThemeProvider>
  )
}

export default App
