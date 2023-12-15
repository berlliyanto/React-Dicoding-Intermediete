import { useEffect, useState } from "react"
import { getAllNotes } from "../../utils/local-data"
import Divider from "../Elements/Divider"
import Card from "../Fragments/Card"
import TextSearch from "../Fragments/TextSearch"
import { showFormattedDate } from "../../utils"

const HomeLayout = () => {

    const [notes, setNotes] = useState([]);

    const getNotes = () => setNotes(getAllNotes());

    const renderNotes = () => {
        if (notes.length <= 0) {
            return <h1>Tidak ada catatan</h1>
        }
        return notes.map((note) => {
            return (
                <Card id={note.id} 
                title={note.title} 
                body={note.body} 
                createdAt={showFormattedDate(note.createdAt)} />
            )
        })
    }

    useEffect(() => {
        getNotes();
    }, [])

    return (
        <main className="px-8 py-4">
            <TextSearch title="Cari Catatan" htmlFor="search" id="search" name="search" />
            <Divider />
            <section className="flex flex-col gap-3 md:flex-row md:flex-wrap">
                {renderNotes()}
            </section>
        </main>
    )
}

export default HomeLayout