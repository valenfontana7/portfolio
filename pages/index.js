import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experiences, projects, contact } from "../profile";

const Index = () => (
  <Layout>
    {/* Header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light radius">
          <div className="row">
            <div className="col-md-4">
              <img
                className="img-fluid radius"
                src="/photo.jpg"
                alt="profilePhoto"
              />
            </div>
            <div className="col-md-8">
              <h1>Valentin Fontana</h1>
              <hr />
              <h3>Software Developer</h3>
              <hr />
              <h5>
                Software developer with experience in testing, design,
                architecture on web application development from back-end to
                front-end.
              </h5>
              <hr />
              <div className="contact-info">
                <h4 className="mx-auto">Contact Me</h4>
                <br />
                <div className="contact-details">
                  <h5>
                    <b>Phone Number</b>: <em>{contact.phone}</em>
                  </h5>
                  <br />
                  <h5>
                    <b>Email</b>: <em>{contact.email}</em>
                  </h5>
                  <br />
                  <br />
                  <h5>
                    <b>Location</b>: <em>{contact.location}</em>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Second section */}

    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light radius animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1 className="mb-4">Skills</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill }, i) => (
              <div className="py-3" key={i}>
                <h5 className="ml-5">{skill}</h5>
                {/* <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light radius animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, from, to, description }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                    {description &&
                      (description.includes("/")
                        ? description.split("/").map((el) => (
                            <div>
                              {el}
                              <br />
                            </div>
                          ))
                        : description)}
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/hireme">
              <a className="btn btn-light">Know More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card radius card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {projects.map(
                ({ name, description, image, url, github }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card radius h-100">
                      <div className="overflow">
                        <img
                          src={`/${image}`}
                          alt=""
                          className="card-img-top radius"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <div className="project-btns">
                          <a href={github} target="_blank">
                            <img src="github.png" alt="" />
                          </a>
                          <a href={url} target="_blank">
                            <img src="web.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/portfolio">
                    <a className="btn btn-outline-light">More Projects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
export default Index;
