import { useOutletContext, useLoaderData } from "react-router-dom"
import ApplicationCard from "./ApplicationCard"

function ApplicationList() {
    const applications = useLoaderData()
    const {filteredApplications} = useOutletContext() // This imports the list of components to be rendered, in this case should be applications
    
    // This displays Application components via a map of the application list
    const applicationComponents = applications.map(application => {
        return <ApplicationCard key={application.id} school={application.school.school_name} student_fn={application.student.first_name} student_ln={application.student.last_name} />
    })
    
    return (
        <div>
            <h3>Applications</h3>
             <ol className="application-list">{applicationComponents}</ol>
        </div>
       
    )
}

export default ApplicationList;