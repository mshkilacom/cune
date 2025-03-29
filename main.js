import names from './names.js';

function chooseName(gender) {
    const filteredNames = names.filter(name => name.gender === gender);
    const randomName = filteredNames[Math.floor(Math.random() * filteredNames.length)];
    const nameTableBody = document.querySelector("#nameTable tbody");
    const detailsTableBody = document.querySelector("#detailsTable tbody");

    nameTableBody.innerHTML = `
        <tr>
            <td>${randomName.name}</td>
            <td>${randomName.gender === 'boy' ? 'Chico / 男孩' : 'Chica / 女孩'}</td>
            <td>${randomName.meaning}</td>
            <td>${randomName.history}</td>
            <td>${randomName.famousPerson}</td>
            <td rowspan="2"><img src="img/${randomName.img}" alt="${randomName.name}"></td>
        </tr>
    `;
    detailsTableBody.innerHTML = `
        <tr>
            <td>${randomName.birthDate}</td>
            <td>${randomName.deathDate}</td>
            <td>${randomName.nationality}</td>
            <td>${randomName.achievements}</td>
        </tr>
    `;
}
window.chooseName = chooseName; // This makes the function available globally
