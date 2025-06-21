import type { AllTrafficStats, AiTool } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart3 } from "lucide-react"

interface StatsPanelProps {
  stats: AllTrafficStats
  tools: AiTool[] // To get tool names
}

export default function StatsPanel({ stats, tools }: StatsPanelProps) {
  const getToolName = (toolId: string) => tools.find((t) => t.id === toolId)?.name || toolId
  const today = new Date().toISOString().split("T")[0]

  const sortedStats = Object.entries(stats)
    .map(([toolId, data]) => ({
      toolId,
      name: getToolName(toolId),
      totalClicks: data.total || 0,
      todayClicks: data.daily?.[today] || 0,
    }))
    .sort((a, b) => b.totalClicks - a.totalClicks)

  if (sortedStats.length === 0) {
    return (
      <Card className="mt-12 rounded-xl shadow-md border border-primary/20 bg-card/80 backdrop-blur-sm">
        <CardHeader className="border-b border-primary/10">
          <CardTitle className="flex items-center text-lg font-semibold text-primary">
            <BarChart3 className="mr-2 h-6 w-6" /> Traffic Statistics
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-muted-foreground">
            No traffic data yet. Click on "Go to Original Site" on tool detail pages to record visits.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mt-12 rounded-xl shadow-md border border-primary/20 bg-card/80 backdrop-blur-sm overflow-hidden">
      <CardHeader className="border-b border-primary/10">
        <CardTitle className="flex items-center text-lg font-semibold text-primary">
          <BarChart3 className="mr-2 h-6 w-6" /> Traffic Statistics
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-4">
          Site click counts are stored locally in your browser. Data is illustrative. For actual charts, a library like
          Recharts or Chart.js would be integrated.
        </p>
        <div className="rounded-lg overflow-hidden border border-primary/10">
          <Table>
            <TableHeader>
              <TableRow className="bg-black/30 hover:bg-black/40">
                <TableHead className="py-2 px-3 text-xs font-medium text-primary/80">Tool Name</TableHead>
                <TableHead className="py-2 px-3 text-xs font-medium text-primary/80 text-right">Clicks (Today)</TableHead>
                <TableHead className="py-2 px-3 text-xs font-medium text-primary/80 text-right">Clicks (Total)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedStats.map((stat) => (
                <TableRow key={stat.toolId} className="border-b border-primary/5 hover:bg-black/20">
                  <TableCell className="py-2 px-3 text-sm font-medium">{stat.name}</TableCell>
                  <TableCell className="py-2 px-3 text-sm text-right">{stat.todayClicks}</TableCell>
                  <TableCell className="py-2 px-3 text-sm text-right">{stat.totalClicks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
