// Fetch Courses 
fetch("http://localhost:3000/api/courses")
  .then((response) => response.json())
  .then((courses) => {
    const dashboard = document.getElementById("dashboard");
    const courseList = document.createElement("ul");

    courses.forEach((course) => {
      const listItem = document.createElement("li");
      listItem.textContent = course.name;
      courseList.appendChild(listItem);
    });

    dashboard.appendChild(courseList);
  })
  .catch((error) => console.error("Error fetching courses:", error));