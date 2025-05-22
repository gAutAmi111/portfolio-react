const Projects = () => (
    <section className="container p-10 bg-grey-100 text-center" id="projects">
        <div className="box">
            <h2 className="text-3xl font-bold mb-4">
                Projects
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
                {/* Project-1 */}
                <div className="p-4 bg-white shadow rounded">
                    <h3 className="font-semibold">Project-1</h3>
                    <p>Flipkart Clone – E-commerce Web Application
                        A full-featured e-commerce platform inspired by Flipkart, built for seamless online shopping and product delivery. Includes user authentication, product browsing, cart management, secure checkout, and an admin dashboard for managing inventory and orders. Developed using   Python, Django, MySql.</p>
                </div>
                {/* Project-2 */}
                <div className="p-4 bg-white shadow rounded">
                    <h3 className="font-semibold">Project-2</h3>
                    <p>Bookstore- A web-based platform built with Django and Django REST Framework that allows users to browse, issue, and read digital books online. Features include user authentication, book search and filtering, and a complete book issuing/return system. Admins can manage books, categories, and track issued books. Designed with scalability, clean APIs, and a user-friendly interface in mind.</p>
                </div>
                {/* Project-3 */}
                <div className="p-4 bg-white shadow rounded">
                    <h3 className="font-semibold">Project-3</h3>
                    <p>Petstore- A user-friendly web application designed to connect pet adopters with pet donors. Users can browse available pets, view detailed profiles, and request adoptions, while pet owners can easily donate pets for adoption. Includes features like user authentication, pet listing with images and details, adoption request management, and admin moderation. Built with Django and Python also the platform promotes safe and transparent pet adoption.</p>
                </div>
            </div>
        </div>
    </section>
)

export default Projects