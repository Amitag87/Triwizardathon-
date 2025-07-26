"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, Users, Play } from "lucide-react"

interface CourseCardProps {
  course: {
    id: number
    title: string
    instructor: string
    category: string
    level: string
    rating: number
    students: number
    duration: string
    price: number
    thumbnail: string
    description: string
  }
  onEnroll?: (courseId: number) => void
}

export default function CourseCard({ course, onEnroll }: CourseCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gray-200 relative">
        <img src={course.thumbnail || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2">
          <Badge variant="secondary">{course.level}</Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge>{course.category}</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
        <CardDescription>by {course.instructor}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${course.price}</span>
          <Button onClick={() => onEnroll?.(course.id)}>
            <Play className="h-4 w-4 mr-2" />
            Enroll Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
