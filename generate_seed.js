const coursesData = require("./assets/js/courses.js");
const fs = require("fs");
const path = require("path");

// Handle ES Module export (default) or CommonJS
const courses = coursesData.default || coursesData.courses || (Array.isArray(coursesData) ? coursesData : [coursesData]).filter(Boolean);

if (!Array.isArray(courses) || courses.length === 0) {
  console.error("Error: courses.js does not export a valid array of courses");
  process.exit(1);
}

let sql = "-- Clear existing data\nTRUNCATE TABLE courses RESTART IDENTITY CASCADE;\n\n-- Insert courses\n";
courses.forEach(course => {
  const price = parseFloat(course.price.replace(/,/g, ""));
  const courseCompletion = Array.isArray(course.courseCompletion) ? course.courseCompletion : 
                          [course.courseCompletion || course.courseCompletionCertificate || ""];
  sql += `
INSERT INTO courses (name, category, duration, summary, image, price, description, courseObjectives, curriculum, targetAudience, courseBenefits, courseCompletion)
VALUES (
    '${course.name.replace(/'/g, "''")}',
    '${course.category}',
    ${course.duration ? `'${course.duration}'` : 'NULL'},
    ${course.summary ? `'${course.summary.replace(/'/g, "''")}'` : 'NULL'},
    ${course.image ? `'${course.image}'` : 'NULL'},
    ${price},
    '${course.description.replace(/'/g, "''")}'${course.description ? '' : 'NULL'},
    '${JSON.stringify(course.courseObjectives || []).replace(/'/g, "''")}'::jsonb,
    '${JSON.stringify(course.curriculum || []).replace(/'/g, "''")}'::jsonb,
    '${JSON.stringify(course.targetAudience || []).replace(/'/g, "''")}'::jsonb,
    '${JSON.stringify(course.courseBenefits || []).replace(/'/g, "''")}'::jsonb,
    '${JSON.stringify(courseCompletion).replace(/'/g, "''")}'::jsonb
);\n`;
});

// Use absolute path
const outputPath = path.resolve("/home/codenamemomi/projects/konasal_backend/api/db/sql/seed_courses.sql");
fs.writeFileSync(outputPath, sql);
console.log("seed_courses.sql generated successfully at", outputPath);