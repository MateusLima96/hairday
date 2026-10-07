// Data de hoje no formato "AAAA-MM-DD", que é o formato que o input date espera
export function getToday() {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, "0")
    const day = String(today.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
}

// Indica se o horário "HH:MM" da data "AAAA-MM-DD" já passou
export function isPastTime(date: string, time: string) {
    return new Date(`${date}T${time}`) <= new Date()
}
