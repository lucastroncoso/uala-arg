import Head from 'next/head';
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Container from '../../components/container';
import Image from "next/image";
import SumateFilters from '../../components/sumate/sumateFilters'
import SumateJobCard from '../../components/sumate/sumateJobCard';
const axios = require('axios');



export async function getStaticProps() {
    // add a try / catch loop for nicer error handling
    try {

        var config = {
            method: 'get',
            url: 'https://www.comeet.co/careers-api/2.0/company/54.00B/positions?token=45B15C715C78B6273322D88B6D111A22D11&details=true',

        };
        const res = await axios(config)

        const data = JSON.stringify(res.data)

        return {
            props: {
                data
            },
            revalidate: 10
        };
    } catch (error) {
        /* add a descriptive error message first,
        so we know which GraphQL query caused the issue */
        console.error(`There was a problem retrieving entries with the query `);
        console.error(error);
        return {
            redirect: {
                destination: '/',
                statusCode: 307
            }
        }

    }
}


export default function BusquedasLaborales({ data }) {
    data = JSON.parse(data);

    const departments = ["Todos"]
    const seniority = ["Todos"]
    data.forEach(element => {
        if (element.categories[1].value == "Argentina" && element.categories[1].name == "Web") {
            if (!departments.includes(element.department)) {
                departments.push(element.department)
            }
            if (!seniority.includes(element.experience_level) && element.experience_level) {
                seniority.push(element.experience_level)
            }
        }
    });

    departments.push(departments.splice(departments.indexOf(departments.find(element => element === 'Trabaja con nosotros')), 1)[0])

    const [selectedDepartment, setSelectedDepartment] = useState("Todos")
    const [selectedSeniority, setSelectedSeniority] = useState("Todos")

    return (
        <>
            <Head>
                <title>Ual?? - Trabaj?? con nosotros: B??squedas laborales</title>
                <meta name="description" content="??Quer??s trabajar en Ual??? Entr?? y enterate de todas las b??squedas laborales que se encuentran abiertas en este momento." />
            </Head>
            <Layout nav footer banner>

                <Container className="my-48">
                    <div className="mb-12">
                        <SumateFilters
                            selectedDepartment={selectedDepartment}
                            categories={departments}
                            setSelectedDepartment={setSelectedDepartment}
                            selectedSeniority={selectedSeniority}
                            seniority={seniority}
                            setSelectedSeniority={setSelectedSeniority} />
                    </div>

                    {departments.map((department, index) => {
                        if (selectedDepartment === "Todos")
                            return <div key={index}>
                                {department !== "Todos" && <h2 className="title-2">{department}</h2>}
                                <div className="grid md:grid-cols-3 py-12">
                                    {data.map(position => {
                                        if (position.department === department && (position.experience_level === selectedSeniority || selectedSeniority === "Todos") && (position.categories[1].value == "Argentina"))
                                            return <SumateJobCard position={position} key={position.uid} />
                                    })}
                                </div>
                            </div>
                        if (selectedDepartment === department) {
                            return <div key={index}>
                                {department !== "Todos" && <h2 className="title-2">{selectedDepartment}</h2>}
                                <div className="grid md:grid-cols-3 py-12">
                                    {data.map(position => {
                                        if (position.department === selectedDepartment && (position.experience_level === selectedSeniority || selectedSeniority === "Todos") && (position.categories[1].value == "Argentina"))
                                            return <SumateJobCard position={position} key={position.uid} />
                                    })}
                                </div>
                            </div>
                        }

                    }
                    )
                    }
                </Container>

            </Layout>
        </>
    )





}