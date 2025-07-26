import { type NextRequest, NextResponse } from "next/server"

// Mock user data - in a real app, this would come from a database
const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "password123", // In real app, this would be hashed
    role: "student",
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah@example.com",
    password: "instructor123",
    role: "instructor",
  },
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json({ success: false, error: "Email and password are required" }, { status: 400 })
    }

    // Find user by email
    const user = users.find((u) => u.email === email)
    if (!user) {
      return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
    }

    // Check password (in real app, you would compare hashed passwords)
    if (user.password !== password) {
      return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
    }

    // In a real app, you would generate a JWT token
    const token = `mock-jwt-token-${user.id}`

    // Return user data without password
    const { password: _, ...safeUser } = user

    return NextResponse.json({
      success: true,
      data: {
        user: safeUser,
        token,
      },
      message: "Login successful",
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Login failed" }, { status: 500 })
  }
}
