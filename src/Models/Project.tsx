class Project {
    id: string;
    projectName: string;
    managerName: string;
    totalHours: number;
    constructor(id: string, projectName: string, managerName: string, totalHours: number ){
        this.id = id;
        this.projectName = projectName;
        this.managerName = managerName;
        this.totalHours = totalHours;
        
    }
}
export default Project;