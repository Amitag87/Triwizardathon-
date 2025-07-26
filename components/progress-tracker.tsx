import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Award } from "lucide-react"

interface ProgressTrackerProps {
  enrollment: {
    courseTitle: string
    progress: number
    completedLessons: number
    totalLessons: number
    nextLesson?: string
    estimatedCompletion?: string
  }
}

export default function ProgressTracker({ enrollment }: ProgressTrackerProps) {
  const progressColor =
    enrollment.progress >= 80 ? "bg-green-500" : enrollment.progress >= 50 ? "bg-blue-500" : "bg-yellow-500"

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{enrollment.courseTitle}</CardTitle>
          <Badge variant={enrollment.progress === 100 ? "default" : "secondary"}>
            {enrollment.progress === 100 ? "Completed" : "In Progress"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>{enrollment.progress}%</span>
          </div>
          <Progress value={enrollment.progress} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>
              {enrollment.completedLessons}/{enrollment.totalLessons} lessons
            </span>
          </div>
          {enrollment.estimatedCompletion && (
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>{enrollment.estimatedCompletion}</span>
            </div>
          )}
        </div>

        {enrollment.nextLesson && enrollment.progress < 100 && (
          <div className="pt-2 border-t">
            <p className="text-sm text-gray-600">Next lesson:</p>
            <p className="font-medium">{enrollment.nextLesson}</p>
          </div>
        )}

        {enrollment.progress === 100 && (
          <div className="flex items-center space-x-2 text-green-600 pt-2 border-t">
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">Certificate available!</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
