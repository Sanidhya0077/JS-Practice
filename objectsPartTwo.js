var user = {
    firstName: 'Sanidhya',
    lastName: 'Vijaivargia',
    role: 'Admin',
    loginCount: 32,
    isUsingFacebook: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
        return this.courseList;
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses` 
    },
    info: function () {
        return `firstName : ${this.firstName},
                lastName: ${this.lastName},
                role: ${this.role},
                loginCount: ${this.loginCount},
                isUsingFacebook: ${this.isUsingFacebook},
                courseList: ${this.courseList}`
    }
}

console.log(user.getCourseCount());
console.log(user.buyCourse("React Developer Bootcamp"));
console.log(user.getCourseCount());

