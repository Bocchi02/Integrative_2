function calculateWeeklyHours(employees) {
  employees.forEach((employee) => {
    const totalHours = employee.hours.reduce((sum, daily) => sum + daily, 0);

    console.log(`${employee.name} worked ${totalHours} hours this week.`);

    if (totalHours < 40) {
      console.log(`${employee.name} is underworked (less than 40 hours).`);
    }
  });
}
