import { type NextRequest, NextResponse } from "next/server"

// Mock data - in a real app, this would come from a database
const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    category: "Web Development",
    level: "Beginner",
    rating: 4.9,
    students: 2340,
    duration: "40 hours",
    price: 99,
    description: "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp.",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Data Science with Python",
    instructor: "Dr. Michael Chen",
    category: "Data Science",
    level: "Intermediate",
    rating: 4.8,
    students: 1890,
    duration: "35 hours",
    price: 129,
    description: "Master data analysis, visualization, and machine learning with Python and popular libraries.",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const level = searchParams.get("level")
    const search = searchParams.get("search")

    let filteredCourses = courses

    if (category && category !== "all") {
      filteredCourses = filteredCourses.filter((course) => course.category === category)
    }

    if (level && level !== "all") {
      filteredCourses = filteredCourses.filter((course) => course.level === level)
    }

    if (search) {
      filteredCourses = filteredCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(search.toLowerCase()) ||
          course.instructor.toLowerCase().includes(search.toLowerCase()),
      )
    }

    return NextResponse.json({
      success: true,
      data: filteredCourses,
      total: filteredCourses.length,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch courses" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, instructor, category, level, price, description } = body

    // Validate required fields
    if (!title || !instructor || !category || !level || !price) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would save to database
    const newCourse = {
      id: courses.length + 1,
      title,
      instructor,
      category,
      level,
      price: Number.parseFloat(price),
      description: description || "",
      rating: 0,
      students: 0,
      duration: "0 hours",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    courses.push(newCourse)

    return NextResponse.json(
      {
        success: true,
        data: newCourse,
        message: "Course created successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create course" }, { status: 500 })
  }
}
