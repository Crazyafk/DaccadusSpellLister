import { SpellSchool, Concentration, SpellComponent, SpellList, Spell } from './main.js';

function onLoad(){    
    console.log("getformdata onLoad called");
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("#form") as HTMLFormElement
        if(form){
            form.addEventListener("submit", (event) => {
                event.preventDefault()
                const formData = new FormData(form)
                console.log(formData)
                getSpell(formData)
            })
    }})}

function getSpell(data: FormData){
    const name = data.get("name") as string
    const level = data.get("level") as string as unknown as number
    const schools = data.getAll("school") as string[] as unknown[] as SpellSchool[]
    const castingtime = data.get("castingtime") as string
    const range = data.get("range") as string
    const duration = data.get("duration") as string
    const concentration = data.get("concentration") as string as unknown as Concentration
    const components = data.getAll("components") as string[] as unknown[] as SpellComponent[]
    const componentdesc = data.get("componentdesc") as string
    const description = data.get("description") as string
    const lists = data.getAll("lists") as string[] as unknown[] as SpellList[]

    const spell = new Spell(level, name, schools, description, lists, castingtime, components,
        concentration, range, duration, componentdesc)
    console.log(spell);
}

onLoad();