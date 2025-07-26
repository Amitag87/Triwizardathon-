import { type NextRequest, NextResponse } from "next/server"

// Mock enrollment data
const enrollments = [
  {
    id: 1,
    userId: 1,
    courseId: 1,
    progress: 75,
    completedLessons: 18,
    totalLessons: 24,
    enrolledAt: new Date().toISOString(),
    lastAccessedAt: new Date().toISOString(),
  },
  {
    id: 2,
    userId: 1,
    courseId: 2,
    progress: 45,
    completedLessons: 14,
    totalLessons: 32,
    enrolledAt: new Date().toISOString(),
    lastAccessedAt: new Date().toISOString(),
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    let filteredEnrollments = enrollments

    if (userId) {
      filteredEnrollments = filteredEnrollments.filter((enrollment) => enrollment.userId === Number.parseInt(userId))
    }

    return NextResponse.json({
      success: true,
      data: filteredEnrollments,
      total: filteredEnrollments.length,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch enrollments" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, courseId } = body

    // Validate required fields
    if (!userId || !courseId) {
      return NextResponse.json({ success: false, error: "User ID and Course ID are required" }, { status: 400 })
    }

    // Check if already enrolled
    const existingEnrollment = enrollments.find((e) => e.userId === userId && e.courseId === courseId)

    if (existingEnrollment) {
      return NextResponse.json({ success: false, error: "Already enrolled in this course" }, { status: 409 })
    }

    // Create new enrollment
    const newEnrollment = {
      id: enrollments.length + 1,
      userId: Number.parseInt(userId),
      courseId: Number.parseInt(courseId),
      progress: 0,
      completedLessons: 0,
      totalLessons: 20, // This would come from the course data
      enrolledAt: new Date().toISOString(),
      lastAccessedAt: new Date().toISOString(),
    }

    enrollments.push(newEnrollment)

    return NextResponse.json(
      {
        success: true,
        data: newEnrollment,
        message: "Successfully enrolled in course",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to enroll in course" }, { status: 500 })
  }
}
