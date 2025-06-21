import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Frown } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <Frown className="w-24 h-24 text-primary mb-6" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild size="lg">
        <Link href="/">Go back to Homepage</Link>
      </Button>
    </div>
  )
}
