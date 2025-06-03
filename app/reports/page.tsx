import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for tables
const monthlySubmissionsData = [
  { name: "Jan", submissions: 12 },
  { name: "Feb", submissions: 19 },
  { name: "Mar", submissions: 15 },
  { name: "Apr", submissions: 22 },
  { name: "May", submissions: 18 },
  { name: "Jun", submissions: 24 },
]

const profileStatusData = [
  { name: "Submitted", value: 18 },
  { name: "Shortlisted", value: 12 },
  { name: "Interview", value: 8 },
  { name: "Interviewed", value: 5 },
  { name: "Rejected", value: 7 },
  { name: "Work Order Created", value: 4 },
]

const revenueData = [
  { name: "Jan", revenue: 42000 },
  { name: "Feb", revenue: 53000 },
  { name: "Mar", revenue: 48000 },
  { name: "Apr", revenue: 61000 },
  { name: "May", revenue: 57000 },
  { name: "Jun", revenue: 65000 },
]

const jobCategoryData = [
  { name: "Development", value: 35 },
  { name: "DevOps", value: 20 },
  { name: "Data Science", value: 15 },
  { name: "Design", value: 10 },
  { name: "Project Management", value: 12 },
  { name: "Other", value: 8 },
]

export default function ReportsPage() {
  return (
    <div className="container mx-auto px-4 py-4">
      <PageHeader title="Reports" description="View analytics and reports for your vendor activities" />

      <Tabs defaultValue="submissions" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="timesheets">Timesheets</TabsTrigger>
        </TabsList>

        <TabsContent value="submissions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Month</TableHead>
                      <TableHead>Submissions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {monthlySubmissionsData.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.submissions}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profile Status Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Status</TableHead>
                      <TableHead>Count</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {profileStatusData.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Revenue</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {revenueData.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>${row.revenue.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobCategoryData.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timesheets" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Timesheet Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Submissions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {monthlySubmissionsData.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.submissions}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
