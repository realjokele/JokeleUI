import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#/components/ui/card";
import { Button } from "#/components/ui/button";
import { TextField } from "#/components/ui/textfield";
import { Checkbox } from "#/components/ui/checkbox";
import { Link } from "#/components/ui/link";
import { Form } from "react-router";
import { Menu } from "#/components/ui/menu";
import { Icon } from "#/components/Icon";
import { Table } from "#/components/Table";
import { Pagination } from "#/components/ui/pagination";

export default function CardPage() {
  return (
    <div className="w-full space-y-8">
      <div className="text-center text-xl font-bold">Card Page</div>

      <div>
        <div className="text-lg font-bold w-full text-center">Card</div>
        <Card className="mx-auto w-full max-w-lg" py="lg">
          <CardHeader>
            <CardTitle>Monthly Report</CardTitle>
            <CardDescription>Financial summary for June</CardDescription>
          </CardHeader>
          <CardContent>
            The monthly financial report shows a 15% increase in revenue
            compared to last month.
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button>View Details</Button>
            <Button intent="secondary">View Details</Button>
          </CardFooter>
        </Card>
      </div>

      <div>
        <div className="text-lg font-bold w-full text-center">Card Warning</div>
        <Card className="mx-auto w-full max-w-lg" py="lg">
          <CardHeader>
            <CardTitle>Monthly Report</CardTitle>
            <CardDescription>Financial summary for June</CardDescription>
          </CardHeader>
          <CardContent>
            The monthly financial report shows a 15% increase in revenue
            compared to last month.
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button intent="warning">View Details</Button>
            <Button intent="secondary-warning">View Details</Button>
          </CardFooter>
        </Card>
      </div>

      <div>
        <div className="text-lg font-bold w-full text-center">Card Danger</div>
        <Card className="mx-auto w-full max-w-lg" py="lg">
          <CardHeader>
            <CardTitle>Monthly Report</CardTitle>
            <CardDescription>Financial summary for June</CardDescription>
          </CardHeader>
          <CardContent>
            The monthly financial report shows a 15% increase in revenue
            compared to last month.
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button intent="danger">View Details</Button>
            <Button intent="secondary-danger">View Details</Button>
          </CardFooter>
        </Card>
      </div>

      <div>
        <div className="text-xl font-bold w-full text-center">
          Card with Form
        </div>
        <Card className="mx-auto w-full max-w-md" py="2xl">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Don't loose the level, just keep on going.
            </CardDescription>
          </CardHeader>
          <Form>
            <CardContent className="space-y-6">
              <TextField
                isRequired
                label="Email"
                placeholder="Enter your email"
              />
              <TextField
                isRequired
                label="Password"
                isRevealable
                type="password"
                placeholder="Enter your password"
              />
              <div className="flex items-center justify-between">
                <Checkbox>Remember me</Checkbox>
                <Link className="text-sm" to="#">
                  Forgot password?
                </Link>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Login</Button>
            </CardFooter>
          </Form>
        </Card>
      </div>

      <div>
        <div className="text-xl font-bold w-full text-center">
          Card with Action
        </div>
        <Card className="mx-auto w-full max-w-md" py="md">
          <CardHeader>
            <CardTitle>Customers</CardTitle>
            <CardDescription>
              Manage and view customer details with available actions aligned to
              the right.
            </CardDescription>
            <CardAction>
              <Menu>
                <Button size="small" intent="outline">
                  Export... <Icon name="chevron-down" />
                </Button>
                <Menu.Content placement="bottom end">
                  <Menu.Item>Export to PDF</Menu.Item>
                  <Menu.Item>Export to CSV</Menu.Item>
                </Menu.Content>
              </Menu>
            </CardAction>
          </CardHeader>
        </Card>
      </div>

      <div>
        <div className="text-xl font-bold w-full text-center">
          Card with Table
        </div>
        <Card className="mx-auto w-full max-w-[800px]" py="xl">
          <Card.Header>
            <Card.Title>Users</Card.Title>
            <Card.Description>
              Manage users, groups, and roles.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <Table aria-label="Users">
              <Table.Header>
                <Table.Column>#</Table.Column>
                <Table.Column>Name</Table.Column>
                <Table.Column>Gender</Table.Column>
                <Table.Column>Age</Table.Column>
                <Table.Column>Occupation</Table.Column>
                <Table.Column />
              </Table.Header>
              <Table.Body>
                {users.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.gender}</Table.Cell>
                    <Table.Cell>{item.age}</Table.Cell>
                    <Table.Cell>{item.occupation}</Table.Cell>
                    <Table.Cell className="flex justify-end">
                      <Menu>
                        <Menu.Trigger>
                          {/* <IconDotsVertical /> */}
                        </Menu.Trigger>
                        <Menu.Content placement="left top">
                          <Menu.Item>{/* <IconEye /> View */}</Menu.Item>
                          <Menu.Item>{/* <IconHighlight /> Edit */}</Menu.Item>
                          <Menu.Separator />
                          <Menu.Item isDanger>
                            {/* <IconTrash /> Delete */}
                          </Menu.Item>
                        </Menu.Content>
                      </Menu>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Card.Content>
          <Card.Footer>
            <Pagination>
              <Pagination.List>
                <Pagination.Item segment="first" />
                <Pagination.Item segment="previous" />
                <Pagination.Section className="rounded-lg border lg:hidden">
                  <Pagination.Item segment="label">1</Pagination.Item>
                  <Pagination.Item segment="separator" />
                  <Pagination.Item className="text-muted-fg" segment="label">
                    {users.length}
                  </Pagination.Item>
                </Pagination.Section>
                <Pagination.Section className="hidden lg:flex" items={pages}>
                  {(item) => (
                    <Pagination.Item
                      id={item.value.toString()}
                      isCurrent={item.value === 4}
                      href="#"
                    >
                      {item.value}
                    </Pagination.Item>
                  )}
                </Pagination.Section>
                <Pagination.Item segment="next" />
                <Pagination.Item segment="last" />
              </Pagination.List>
            </Pagination>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

const users = [
  {
    id: 1,
    name: "John Doe",
    gender: "Male",
    age: 30,
    occupation: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    age: 25,
    occupation: "Marketing Manager",
  },
  {
    id: 3,
    name: "Bob Johnson",
    gender: "Male",
    age: 40,
    occupation: "Doctor",
  },
  {
    id: 4,
    name: "Emily Chen",
    gender: "Female",
    age: 28,
    occupation: "Teacher",
  },
  {
    id: 5,
    name: "Michael Brown",
    gender: "Male",
    age: 35,
    occupation: "Lawyer",
  },
  {
    id: 6,
    name: "Sarah Lee",
    gender: "Female",
    age: 32,
    occupation: "Designer",
  },
  {
    id: 7,
    name: "Kevin White",
    gender: "Male",
    age: 45,
    occupation: "CEO",
  },
  {
    id: 8,
    name: "Lisa Nguyen",
    gender: "Female",
    age: 29,
    occupation: "Engineer",
  },
  {
    id: 9,
    name: "David Kim",
    gender: "Male",
    age: 38,
    occupation: "Consultant",
  },
  {
    id: 10,
    name: "Hannah Patel",
    gender: "Female",
    age: 26,
    occupation: "Writer",
  },
];
const pages = Array.from({ length: users.length / 2 }, (_, i) => ({
  value: i + 1,
}));
