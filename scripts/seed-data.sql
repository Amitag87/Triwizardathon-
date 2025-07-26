-- Seed data for Smart Education Platform

-- Insert categories
INSERT INTO categories (name, description) VALUES
('Web Development', 'Learn to build websites and web applications'),
('Data Science', 'Analyze data and build machine learning models'),
('Mobile Development', 'Create mobile apps for iOS and Android'),
('Design', 'UI/UX design and graphic design courses'),
('Marketing', 'Digital marketing and business growth strategies'),
('Programming', 'General programming languages and concepts');

-- Insert sample users
INSERT INTO users (first_name, last_name, email, password_hash, role, bio) VALUES
('John', 'Doe', 'john@example.com', '$2b$10$hashedpassword1', 'student', 'Passionate learner interested in web development'),
('Sarah', 'Johnson', 'sarah@example.com', '$2b$10$hashedpassword2', 'instructor', 'Full-stack developer with 8 years of experience'),
('Dr. Michael', 'Chen', 'michael@example.com', '$2b$10$hashedpassword3', 'instructor', 'Data scientist and machine learning expert'),
('Emma', 'Rodriguez', 'emma@example.com', '$2b$10$hashedpassword4', 'instructor', 'Digital marketing specialist and entrepreneur'),
('Admin', 'User', 'admin@example.com', '$2b$10$hashedpassword5', 'admin', 'Platform administrator');

-- Insert sample courses
INSERT INTO courses (title, description, instructor_id, category_id, level, price, duration_hours, is_published) VALUES
('Complete Web Development Bootcamp', 'Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp.', 2, 1, 'Beginner', 99.00, 40, true),
('Data Science with Python', 'Master data analysis, visualization, and machine learning with Python and popular libraries.', 3, 2, 'Intermediate', 129.00, 35, true),
('Digital Marketing Mastery', 'Learn SEO, social media marketing, content marketing, and paid advertising strategies.', 4, 5, 'Beginner', 79.00, 25, true),
('Advanced JavaScript & ES6+', 'Deep dive into modern JavaScript features, async programming, and advanced concepts.', 2, 6, 'Advanced', 119.00, 28, true),
('UI/UX Design Fundamentals', 'Learn design principles, user research, wireframing, and prototyping.', 2, 4, 'Beginner', 89.00, 30, true);

-- Insert sample lessons for Web Development course
INSERT INTO lessons (course_id, title, description, content, duration_minutes, order_index, is_free) VALUES
(1, 'Introduction to HTML', 'Learn the basics of HTML markup language', 'HTML fundamentals and structure', 45, 1, true),
(1, 'CSS Styling Basics', 'Style your HTML with CSS', 'CSS selectors, properties, and layout', 60, 2, false),
(1, 'JavaScript Fundamentals', 'Introduction to JavaScript programming', 'Variables, functions, and DOM manipulation', 75, 3, false),
(1, 'React Components', 'Building reusable UI components', 'Component lifecycle and state management', 90, 4, false);

-- Insert sample lessons for Data Science course
INSERT INTO lessons (course_id, title, description, content, duration_minutes, order_index, is_free) VALUES
(2, 'Python Basics for Data Science', 'Python fundamentals for data analysis', 'Variables, data types, and basic operations', 50, 1, true),
(2, 'NumPy Arrays', 'Working with numerical data', 'Array operations and mathematical functions', 65, 2, false),
(2, 'Pandas DataFrames', 'Data manipulation and analysis', 'Loading, cleaning, and transforming data', 80, 3, false),
(2, 'Data Visualization', 'Creating charts and graphs', 'Matplotlib and Seaborn libraries', 70, 4, false);

-- Insert sample enrollments
INSERT INTO enrollments (user_id, course_id, progress_percentage, last_accessed_at) VALUES
(1, 1, 75, CURRENT_TIMESTAMP - INTERVAL '2 hours'),
(1, 2, 45, CURRENT_TIMESTAMP - INTERVAL '1 day'),
(1, 3, 90, CURRENT_TIMESTAMP - INTERVAL '3 hours');

-- Insert lesson progress
INSERT INTO lesson_progress (user_id, lesson_id, completed, completed_at, watch_time_seconds) VALUES
(1, 1, true, CURRENT_TIMESTAMP - INTERVAL '5 days', 2700),
(1, 2, true, CURRENT_TIMESTAMP - INTERVAL '4 days', 3600),
(1, 3, true, CURRENT_TIMESTAMP - INTERVAL '3 days', 4500),
(1, 5, true, CURRENT_TIMESTAMP - INTERVAL '2 days', 3000),
(1, 6, false, NULL, 1800);

-- Insert sample reviews
INSERT INTO reviews (user_id, course_id, rating, comment) VALUES
(1, 1, 5, 'Excellent course! Very comprehensive and well-structured.'),
(1, 2, 4, 'Great content, but could use more practical examples.'),
(1, 3, 5, 'Perfect for beginners. Emma explains everything clearly.');

-- Insert certificates
INSERT INTO certificates (user_id, course_id, certificate_url) VALUES
(1, 3, 'https://certificates.smartedu.com/cert_1_3.pdf');
