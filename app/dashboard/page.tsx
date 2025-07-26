"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Award, TrendingUp, Play, Calendar, Users } from "lucide-react"

export default function DashboardPage() {
  const [user] = useState({
    name: "John Doe",
    role: "student",
    avatar: "/placeholder.svg?height=40&width=40",
  })

  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      nextLesson: "JavaScript Functions",
      instructor: "Sarah Johnson",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 2,
      title: "Data Science with Python",
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      nextLesson: "Pandas DataFrames",
      instructor: "Dr. Michael Chen",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      progress: 90,
      totalLessons: 20,
      completedLessons: 18,
      nextLesson: "Analytics & Reporting",
      instructor: "Emma Rodriguez",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
  ]

  const recentActivity = [
    { type: "completed", course: "Web Development Fundamentals", lesson: "CSS Grid Layout", time: "2 hours ago" },
    { type: "started", course: "Data Science with Python", lesson: "NumPy Arrays", time: "1 day ago" },
    { type: "achievement", course: "Digital Marketing Mastery", lesson: "Completed Module 4", time: "2 days ago" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold">SmartEdu</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-8 w-8 rounded-full" />
            <span className="font-medium">{user.name}</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hours Learned</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">+12 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">1 pending completion</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">70%</div>
              <p className="text-xs text-muted-foreground">+5% from last week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* My Courses */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>My Courses</CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="w-20 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate">{course.title}</h3>
                      <p className="text-xs text-gray-500 mb-2">by {course.instructor}</p>
                      <div className="flex items-center space-x-2 mb-2">
                        <Progress value={course.progress} className="flex-1" />
                        <span className="text-xs text-gray-500">{course.progress}%</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        {course.completedLessons}/{course.totalLessons} lessons • Next: {course.nextLesson}
                      </p>
                    </div>
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-1" />
                      Continue
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === "completed"
                          ? "bg-green-500"
                          : activity.type === "started"
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.lesson}</p>
                      <p className="text-xs text-gray-500">{activity.course}</p>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium">Live Q&A Session</p>
                    <p className="text-xs text-gray-500">Tomorrow, 3:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-4 w-4 text-green-600" />
                  <div>
                    <p className="text-sm font-medium">Study Group</p>
                    <p className="text-xs text-gray-500">Friday, 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-yellow-600" />
                  <div>
                    <p className="text-sm font-medium">Certificate Exam</p>
                    <p className="text-xs text-gray-500">Next Monday</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Courses
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Join Study Group
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Award className="h-4 w-4 mr-2" />
                  View Certificates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
