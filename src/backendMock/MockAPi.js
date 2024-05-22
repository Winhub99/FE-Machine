const api1 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "JKL", marks: "85%", registrationID: "1121" },
          { name: "ABC", marks: "98%", registrationID: "1234" }, // duplicate
          { name: "MNO", marks: "92%", registrationID: "3141" },
        ]);
      }, 1000);
    });
  };
  
  const api2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "ABC", marks: "98%", registrationID: "1234" },
          { name: "DEF", marks: "88%", registrationID: "5678" },
          { name: "GHI", marks: "76%", registrationID: "9101" },
        ]);
      }, 1000);
    });
  };
  
  const mergeAndRemoveDuplicate = async () => {
    try {
      const [res1, res2] = await Promise.all([api1(), api2()]);
  
      const mergedData = [...res1, ...res2];
      console.log(mergedData);
      const uniqueStudents = {};
      mergedData.forEach((student) => {
        uniqueStudents[student.registrationID] = student;
      });
      const uniqueStudentsList = Object.values(uniqueStudents);
      console.log(uniqueStudentsList);
      return uniqueStudentsList;
    } catch (error) {
      console.log(error);
    }
  };
  const response = mergeAndRemoveDuplicate();
  console.log(response);
  