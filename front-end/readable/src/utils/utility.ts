function generateUID (): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatDate (timestamp: number): string {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

function generateTimestamp(): number {
    return Date.now();
}

module.exports = {
    generateUID,
    formatDate,
    generateTimestamp
}