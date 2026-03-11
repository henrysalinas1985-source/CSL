const STORAGE_KEY = 'agustina_equipment_data';

const INITIAL_DATA = [
    { "aparato": "Altímetro_301_CAM P-1003_SN 7810", "equipo": "", "serie": "7810", "ubicacion": "Barrio Parque - 301", "calibracion": "14/04/2025", "vencimiento": "", "id": 2 },
    { "aparato": "Altímetro_302_CAM P-1001_SN 5475", "equipo": "", "serie": "5475", "ubicacion": "Barrio Parque - 302", "calibracion": "14/04/2025", "vencimiento": "", "id": 3 },
    { "aparato": "Altímetro_307_CAM P1003_SN 8972", "equipo": "", "serie": "8972", "ubicacion": "Barrio Parque - 307", "calibracion": "14/04/2025", "vencimiento": "", "id": 4 },
    { "aparato": "Altímetro_308_CAM P1003_SN 4841", "equipo": "", "serie": "4841", "ubicacion": "Barrio Parque - 308", "calibracion": "14/04/2025", "vencimiento": "", "id": 5 },
    { "aparato": "Altímetro_405_CAM P-1003_SN 4715", "equipo": "", "serie": "4715", "ubicacion": "Barrio Parque - 405", "calibracion": "14/04/2025", "vencimiento": "", "id": 6 },
    { "aparato": "Altímetro_406_CAM P-1001_SN 3872", "equipo": "", "serie": "3872", "ubicacion": "Barrio Parque - 406", "calibracion": "14/04/2025", "vencimiento": "", "id": 7 },
    { "aparato": "Balanza_301_CAM P-1003_SN 7810", "equipo": "", "serie": "7810", "ubicacion": "Barrio Parque - 301", "calibracion": "14/04/2025", "vencimiento": "", "id": 8 },
    { "aparato": "Balanza_302_CAM P-1001_SN 5475", "equipo": "", "serie": "5475", "ubicacion": "Barrio Parque - 302", "calibracion": "14/04/2025", "vencimiento": "", "id": 9 },
    { "aparato": "Balanza_307_CAM P-1003_SN 8972", "equipo": "", "serie": "8972", "ubicacion": "Barrio Parque - 307", "calibracion": "14/04/2025", "vencimiento": "", "id": 10 },
    { "aparato": "Balanza_308_CAM P-1003_SN 4841", "equipo": "", "serie": "4841", "ubicacion": "Barrio Parque - 308", "calibracion": "14/04/2025", "vencimiento": "", "id": 11 },
    { "aparato": "Balanza_405_CAM P-1003_SN 4715", "equipo": "", "serie": "4715", "ubicacion": "Barrio Parque - 405", "calibracion": "14/04/2025", "vencimiento": "", "id": 12 },
    { "aparato": "Balanza_406_CAM P-1001_SN 3872", "equipo": "", "serie": "3872", "ubicacion": "Barrio Parque - 406", "calibracion": "14/04/2025", "vencimiento": "", "id": 13 },
    { "aparato": "Balanza_Enfermería BP_CAM P-1003_SN 1587", "equipo": "", "serie": "1587", "ubicacion": "Barrio Parque - Enfermería 2do piso", "calibracion": "08/04/2025", "vencimiento": "", "id": 14 },
    { "aparato": "Balanza_Lab BP_CAM P-1003_SN 2547", "equipo": "", "serie": "2547", "ubicacion": "Barrio Parque - Lab 2do piso", "calibracion": "08/04/2025", "vencimiento": "", "id": 15 },
    { "aparato": "Balanza de lactantes CAM SN 64413", "equipo": "", "serie": "Quilmes", "ubicacion": "Quilmes", "calibracion": "03/12/2024", "vencimiento": "", "id": 16 },
    { "aparato": "Centrífuga_SN 24622_MP", "equipo": "", "serie": "24622", "ubicacion": "Barrio Parque - Laboratorio 2do piso", "calibracion": "", "vencimiento": "", "id": 17 },
    { "aparato": "Centrífuga_SN 24622_SE", "equipo": "", "serie": "24622", "ubicacion": "Barrio Parque - Laboratorio 2do piso", "calibracion": "20/09/2023", "vencimiento": "", "id": 18 },
    { "aparato": "Desfibrilador Mindray BeneHeart D3_SN EZ-37114186 MP", "equipo": "", "serie": "EZ-37114186", "ubicacion": "Barrio Parque - Enfermería 2do piso", "calibracion": "30/07/2025", "vencimiento": "", "id": 19 },
    { "aparato": "Desfibrilador Mindray BeneHeart D3_SN EZ-37114186 SE", "equipo": "", "serie": "EZ-37114186", "ubicacion": "Barrio Parque - Enfermería 2do piso", "calibracion": "30/07/2025", "vencimiento": "", "id": 20 },
    { "aparato": "Ecocardiógrafo Phillips_ SN USD0531320", "equipo": "", "serie": "USD0531320", "ubicacion": "Barrio Parque - 307", "calibracion": "29/08/2025", "vencimiento": "", "id": 21 },
    { "aparato": "Electrocardiógrafo ENTRUST", "equipo": "", "serie": "Schiller Cardiovit FT1", "ubicacion": "Barrio Parque", "calibracion": "25/03/2025", "vencimiento": "", "id": 22 },
    { "aparato": "Electrocardiógrafo Schiller AT-102_SN 07012706_MP", "equipo": "", "serie": "8020006", "ubicacion": "Barrio Parque - Enfermería 2do piso", "calibracion": "17/07/2025", "vencimiento": "", "id": 23 },
    { "aparato": "Electrocardiógrafo Schiller AT-102_SN 07012706_SE", "equipo": "", "serie": "8020006", "ubicacion": "Barrio Parque - Enfermería 2do piso", "calibracion": "21/10/2025", "vencimiento": "", "id": 24 },
    { "aparato": "Heladeras y Freezers_Data Logger_FCIA_Ambiente BACK UP_SN 6045135469", "equipo": "", "serie": "6045135469", "ubicacion": "Barrio Parque - FARMACIA", "calibracion": "13/03/2025", "vencimiento": "", "id": 26 },
    { "aparato": "Heladeras y Freezers_Data Logger_FCIA_Ambiente_ SN 6045135470", "equipo": "", "serie": "6045135470", "ubicacion": "Barrio Parque - FARMACIA", "calibracion": "13/03/2025", "vencimiento": "", "id": 27 },
    { "aparato": "Heladeras y Freezers_Data Logger_FCIA_Freezer_SN 6045135471", "equipo": "", "serie": "6045135471", "ubicacion": "Barrio Parque - FARMACIA", "calibracion": "13/03/2025", "vencimiento": "", "id": 28 },
    { "aparato": "Heladeras y Freezers_Data Logger_FCIA_Heladera 1_SN 6045135233", "equipo": "", "serie": "6045135233", "ubicacion": "Barrio Parque - FARMACIA", "calibracion": "13/03/2025", "vencimiento": "", "id": 29 },
    { "aparato": "Heladeras y Freezers_Data Logger_FCIA_Heladera 2_SN 6045135232", "equipo": "", "serie": "6045135232", "ubicacion": "Barrio Parque - FARMACIA", "calibracion": "12/03/2025", "vencimiento": "", "id": 30 },
    { "aparato": "Heladeras y Freezers_Data Logger_LAB  2do Piso_Criofreezer_SN 94555582", "equipo": "", "serie": "94555582", "ubicacion": "Barrio Parque - LAB 2do Piso", "calibracion": "22/05/2025", "vencimiento": "", "id": 31 },
    { "aparato": "Heladeras y Freezers_Data Logger_LAB 2do Piso_Heladera Bajo Mesada_SN 6045102406", "equipo": "", "serie": "6045102406", "ubicacion": "Barrio Parque - LAB 2do Piso", "calibracion": "22/05/2025", "vencimiento": "", "id": 32 },
    { "aparato": "Heladeras y Freezers_Data Logger_LAB SS_Freezer 2_ SN 6045102581", "equipo": "", "serie": "6045102581", "ubicacion": "Barrio Parque - LAB SS", "calibracion": "22/05/2025", "vencimiento": "", "id": 33 },
    { "aparato": "Heladeras y Freezers_Mondis_FCIA_Ambiente_SN 6100000A1487DC28", "equipo": "", "serie": "6100000A1487DC28", "ubicacion": "Barrio Parque - FARMACIA", "calibracion": "22/05/2025", "vencimiento": "", "id": 34 },
    { "aparato": "Heladeras y Freezers_Mondis_FCIA_Freezer_SN AA0008027616E010", "equipo": "", "serie": "AA0008027616E010", "ubicacion": "Barrio Parque - FARMACIA", "calibracion": "22/05/2025", "vencimiento": "", "id": 35 },
    { "aparato": "Heladeras y Freezers_Mondis_FCIA_Heladera 1_SN D400000C7D0DC128", "equipo": "", "serie": "D400000C7D0DC128", "ubicacion": "Barrio Parque - FARMACIA", "calibracion": "22/05/2025", "vencimiento": "", "id": 36 },
    { "aparato": "Heladeras y Freezers_Mondis_FCIA_Heladera 2_SN 7800000C7BEDDE28", "equipo": "", "serie": "7800000C7BEDDE28", "ubicacion": "Barrio Parque - FARMACIA", "calibracion": "22/05/2025", "vencimiento": "", "id": 37 },
    { "aparato": "Heladeras y Freezers_Mondis_LAB 2do Piso_Criofreezer_SN EB0010000033FE7E", "equipo": "", "serie": "EB0010000033FE7E", "ubicacion": "Barrio Parque - LAB 2do Piso", "calibracion": "22/05/2025", "vencimiento": "", "id": 38 },
    { "aparato": "Heladeras y Freezers_Mondis_LAB 2do Piso_Heladera Pequeña Labo_SN AA00000E69E92428", "equipo": "", "serie": "AA00000E69E92428", "ubicacion": "Barrio Parque - LAB 2do Piso", "calibracion": "22/05/2025", "vencimiento": "", "id": 39 },
    { "aparato": "Heladeras y Freezers_Mondis_LAB SS_Ambiente_ SN 6200080276346310", "equipo": "", "serie": "6200080276346310", "ubicacion": "Barrio Parque - LAB SS", "calibracion": "22/05/2025", "vencimiento": "", "id": 40 },
    { "aparato": "Heladeras y Freezers_Mondis_LAB SS_Freezer 2_SN 0E00000C7B63BA28", "equipo": "", "serie": "0E00000C7B63BA28", "ubicacion": "Barrio Parque - LAB SS", "calibracion": "22/05/2025", "vencimiento": "", "id": 41 },
    { "aparato": "Incubadora THERMO SCIENTIFIC IMC18_ SN 40484873 (Estudio IMVT-1402-2701)", "equipo": "", "serie": "40484873", "ubicacion": "Barrio Parque - LAB 2do Piso", "calibracion": "04/07/2025", "vencimiento": "", "id": 42 },
    { "aparato": "Oxímetro ICL-FORM-OXI 1_SN 205147506395", "equipo": "", "serie": "205147506395", "ubicacion": "Barrio Parque - Neceser Rojo para Emergencias BP", "calibracion": "09/04/2025", "vencimiento": "", "id": 43 },
    { "aparato": "Oxímetro ICL-FORM-OXI 11_SN 183747513159", "equipo": "", "serie": "183747513159", "ubicacion": "Barrio Parque - Neceser Cons. 301", "calibracion": "09/04/2025", "vencimiento": "", "id": 44 },
    { "aparato": "Oxímetro ICL-FORM-OXI 12_SN 205147506397", "equipo": "", "serie": "205147506397", "ubicacion": "Barrio Parque - Neceser Cons. 302", "calibracion": "09/04/2025", "vencimiento": "", "id": 45 },
    { "aparato": "Oxímetro ICL-FORM-OXI 2_SN 205147506393", "equipo": "", "serie": "205147506393", "ubicacion": "Barrio Parque - Neceser Rojo Nro. 2", "calibracion": "09/04/2025", "vencimiento": "", "id": 46 },
    { "aparato": "Oxímetro ICL-FORM-OXI 4_SN 183747513153", "equipo": "", "serie": "183747513153", "ubicacion": "Barrio Parque - Neceser Cons. 405", "calibracion": "09/04/2025", "vencimiento": "", "id": 47 },
    { "aparato": "Oxímetro ICL-FORM-OXI 5_SN 205147506400", "equipo": "", "serie": "205147506400", "ubicacion": "Barrio Parque - Neceser Cons. 406", "calibracion": "09/04/2025", "vencimiento": "", "id": 48 },
    { "aparato": "Oxímetro ICL-FORM-OXI 8_SN 205147506391 ", "equipo": "", "serie": "205147506391", "ubicacion": "Barrio Parque - Neceser Cons. 307 / 308", "calibracion": "09/04/2025", "vencimiento": "", "id": 49 },
    { "aparato": "Oxímetro ICL-FORM-OXI 9_SN 205147506396 ", "equipo": "", "serie": "205147506396", "ubicacion": "Barrio Parque - Neceser Rojo Nro. 1", "calibracion": "09/04/2025", "vencimiento": "", "id": 50 },
    { "aparato": "Tensiómetro 01 de mano ", "equipo": "", "serie": "Hand011122", "ubicacion": "Barrio Parque - Neceser Rojo para Emergencias BP", "calibracion": "18/04/2025", "vencimiento": "", "id": 51 },
    { "aparato": "Tensiómetro 02 de mano ", "equipo": "", "serie": "Aurinco011122", "ubicacion": "Barrio Parque - Neceser Rojo Nro. 2", "calibracion": "18/04/2025", "vencimiento": "", "id": 52 },
    { "aparato": "Tensiómetro 03 de mano ", "equipo": "", "serie": "no tiene", "ubicacion": "Barrio Parque - Neceser Rojo Nro. 1", "calibracion": "18/04/2025", "vencimiento": "", "id": 53 },
    { "aparato": "Tensiómetro Heine Gamma XXL SN 1086928_Cons. 301", "equipo": "", "serie": "1086928", "ubicacion": "Barrio Parque - 301", "calibracion": "18/04/2025", "vencimiento": "", "id": 54 },
    { "aparato": "Tensiómetro Heine Gamma XXL SN 19073_Cons. 302", "equipo": "", "serie": "19073", "ubicacion": "Barrio Parque - 302", "calibracion": "18/04/2025", "vencimiento": "", "id": 55 },
    { "aparato": "Tensiómetro Welch Allyn 767 SN 20050508455_Cons. 307", "equipo": "", "serie": "20050508455", "ubicacion": "Barrio Parque - 307", "calibracion": "18/04/2025", "vencimiento": "", "id": 56 },
    { "aparato": "Tensiómetro Welch Allyn 767 SN 200421120215_Cons. 308", "equipo": "", "serie": "200421120215", "ubicacion": "Barrio Parque - 308", "calibracion": "18/04/2025", "vencimiento": "", "id": 57 },
    { "aparato": "Tensiómetro Heine Gamma XL SN 1087270_Cons. 405", "equipo": "", "serie": "1087270", "ubicacion": "Barrio Parque - 405", "calibracion": "18/04/2025", "vencimiento": "", "id": 58 },
    { "aparato": "Tensiómetro Welch Allyn 767 SN 70214154447_Cons. 406", "equipo": "", "serie": "70214154447", "ubicacion": "Barrio Parque - 406", "calibracion": "18/04/2025", "vencimiento": "", "id": 59 },
    { "aparato": "Termómetro de pie SN 9262488_Cons. 204", "equipo": "", "serie": "9262488", "ubicacion": "Barrio Parque - 204", "calibracion": "26/10/2025", "vencimiento": "", "id": 60 },
    { "aparato": "Termómetro de pie SN 9272131_Cons. 307 y 308", "equipo": "", "serie": "9272131", "ubicacion": "Barrio Parque - 307 y 308", "calibracion": "26/10/2025", "vencimiento": "", "id": 61 },
    { "aparato": "Termómetro de pie SN 9282481_Cons. 205", "equipo": "", "serie": "9282481", "ubicacion": "Barrio Parque - 205", "calibracion": "26/10/2025", "vencimiento": "", "id": 62 },
    { "aparato": "Termómetro de pie SN 9422481_Cons. 405 y 406", "equipo": "", "serie": "9422481", "ubicacion": "Barrio Parque - 405 y 406", "calibracion": "26/10/2025", "vencimiento": "", "id": 63 },
    { "aparato": "Termómetro de pie SN 13512377_Cons. 301 y 302", "equipo": "", "serie": "13512377", "ubicacion": "Barrio Parque - 301 y 302", "calibracion": "26/10/2025", "vencimiento": "", "id": 64 }
];

const api = {
    getData: () => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored || JSON.parse(stored).length < 60) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
            return INITIAL_DATA;
        }
        return JSON.parse(stored);
    },
    saveData: (data) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },
    addItem: (item) => {
        const data = api.getData();
        const newItem = { ...item, id: Date.now() };
        data.push(newItem);
        api.saveData(data);
        return newItem;
    },
    updateItem: (id, updatedItem) => {
        const data = api.getData();
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            data[index] = { ...updatedItem, id };
            api.saveData(data);
        }
    },
    deleteItem: (id) => {
        const data = api.getData();
        const filtered = data.filter(item => item.id !== id);
        api.saveData(filtered);
    }
};

const listElement = document.getElementById('equipment-list');
const addBtn = document.getElementById('add-btn');
const cancelBtn = document.getElementById('cancel-btn');
const modalOverlay = document.getElementById('modal-overlay');
const form = document.getElementById('equipment-form');
const modalTitle = document.querySelector('#modal-overlay h2');
const totalCountElement = document.getElementById('total-count');

let editingId = null;

const searchAparato = document.getElementById('search-aparato');
const filterUbicacion = document.getElementById('filter-ubicacion');

// Folder/File picking simulation
const fileInput = document.getElementById('file-input');
const attachBtn = document.getElementById('attach-btn');
const certificadoInput = document.getElementById('certificado');
const removeCertBtn = document.getElementById('remove-cert-btn');

function updateRemoveBtnVisibility() {
    if (removeCertBtn) {
        removeCertBtn.style.display = certificadoInput.value ? 'flex' : 'none';
    }
}

if (attachBtn) {
    attachBtn.onclick = () => fileInput.click();
    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            certificadoInput.value = file.name;
            updateRemoveBtnVisibility();
        }
    };
}

if (removeCertBtn) {
    removeCertBtn.onclick = () => {
        certificadoInput.value = '';
        fileInput.value = '';
        updateRemoveBtnVisibility();
    };
}

// Helper to calculate expiration (1 year after calibration)
function calculateExpiration(dateStr) {
    if (!dateStr || dateStr === 'N/A' || dateStr === 'Pendiente') return null;
    const parts = dateStr.split('/');
    if (parts.length !== 3) return null;
    const date = new Date(parts[2], parts[1] - 1, parts[0]);
    date.setFullYear(date.getFullYear() + 1);
    return date;
}

// Helper to format date
function formatDate(date) {
    if (!date) return '';
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
}

// Load Unique Locations for Filter
function updateLocationFilter() {
    const data = api.getData();
    const locations = [...new Set(data.map(item => item.ubicacion))].sort();

    filterUbicacion.innerHTML = '<option value="">TODAS LAS UBICACIONES</option>';
    locations.forEach(loc => {
        if (!loc) return;
        const opt = document.createElement('option');
        opt.value = loc;
        opt.textContent = loc;
        filterUbicacion.appendChild(opt);
    });
}

function renderList() {
    const data = api.getData();
    const searchText = searchAparato.value.toLowerCase();
    const locationValue = filterUbicacion.value;

    const now = new Date();
    const fortyDaysFromNow = new Date();
    fortyDaysFromNow.setDate(now.getDate() + 40);

    listElement.innerHTML = '';

    const filteredData = data.filter(item => {
        const matchesSearch = item.aparato.toLowerCase().includes(searchText);
        const matchesLocation = !locationValue || item.ubicacion === locationValue;
        return matchesSearch && matchesLocation;
    });

    // Update total count
    totalCountElement.textContent = filteredData.length;

    if (filteredData.length === 0) {
        listElement.innerHTML = '<tr><td colspan="9" style="text-align:center; padding: 2rem; color: var(--text-muted);">No se encontraron equipos.</td></tr>';
        return;
    }

    filteredData.forEach((item, index) => {
        const expDate = calculateExpiration(item.calibracion);
        const expStr = expDate ? formatDate(expDate) : (item.vencimiento || 'N/A');

        let rowClass = '';
        let badgeClass = '';

        if (expDate) {
            if (expDate < now) {
                rowClass = 'row-alert';
                badgeClass = 'badge-danger';
            } else if (expDate < fortyDaysFromNow) {
                rowClass = 'row-warning';
                badgeClass = 'badge-warning';
            }
        }

        const tr = document.createElement('tr');
        if (rowClass) tr.className = rowClass;

        const certLink = item.certificado
            ? `<a href="certificados/${item.certificado}" target="_blank" class="btn-success-outline">ABRIR</a>`
            : '<span style="color: var(--text-muted); font-size: 0.8rem;">-</span>';

        tr.innerHTML = `
            <td style="color: var(--text-muted); font-weight: 600;">${index + 1}</td>
            <td>${item.aparato}</td>
            <td>${item.equipo || '-'}</td>
            <td>${item.serie}</td>
            <td>${item.ubicacion}</td>
            <td>${item.calibracion || 'Pendiente'}</td>
            <td><span class="badge ${badgeClass}">${expStr}</span></td>
            <td>${certLink}</td>
            <td>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn-primary edit-btn" data-id="${item.id}" style="padding: 0.4rem 0.8rem; font-size: 0.75rem;">EDITAR</button>
                    <button class="btn-danger delete-btn" data-id="${item.id}" style="padding: 0.4rem 0.8rem; font-size: 0.75rem;">ELIMINAR</button>
                </div>
            </td>
        `;
        listElement.appendChild(tr);
    });

    // Bind Edit buttons
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.onclick = () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const data = api.getData();
            const item = data.find(i => i.id === id);
            if (item) {
                editingId = id;
                modalTitle.textContent = 'Editar Equipo';
                document.getElementById('aparato').value = item.aparato;
                document.getElementById('equipo').value = item.equipo || '';
                document.getElementById('serie').value = item.serie;
                document.getElementById('ubicacion').value = item.ubicacion;
                document.getElementById('calibracion').value = item.calibracion || '';
                document.getElementById('vencimiento').value = item.vencimiento || '';
                document.getElementById('certificado').value = item.certificado || '';
                updateRemoveBtnVisibility();
                modalOverlay.style.display = 'flex';
            }
        };
    });

    // Bind Delete buttons
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.onclick = () => {
            const id = parseInt(btn.getAttribute('data-id'));
            if (confirm('¿Estás seguro de eliminar este registro?')) {
                api.deleteItem(id);
                renderList();
            }
        };
    });
}

// Event Listeners for Filters
searchAparato.oninput = renderList;
filterUbicacion.onchange = renderList;

addBtn.onclick = () => {
    editingId = null;
    modalTitle.textContent = 'Agregar Nuevo Equipo';
    form.reset();
    updateRemoveBtnVisibility();
    modalOverlay.style.display = 'flex';
}
cancelBtn.onclick = () => modalOverlay.style.display = 'none';

window.onclick = (e) => {
    if (e.target === modalOverlay) modalOverlay.style.display = 'none';
};

form.onsubmit = (e) => {
    e.preventDefault();
    const itemData = {
        aparato: document.getElementById('aparato').value,
        equipo: document.getElementById('equipo').value,
        serie: document.getElementById('serie').value,
        ubicacion: document.getElementById('ubicacion').value,
        calibracion: document.getElementById('calibracion').value,
        vencimiento: document.getElementById('vencimiento').value,
        certificado: document.getElementById('certificado').value
    };

    if (editingId) {
        api.updateItem(editingId, itemData);
    } else {
        api.addItem(itemData);
    }

    modalOverlay.style.display = 'none';
    updateLocationFilter();
    renderList();
};

// PDF Export Function - Professional Version
function exportToPDF() {
    const data = api.getData();
    const searchText = document.getElementById('search-aparato').value.toLowerCase();
    const locationValue = document.getElementById('filter-ubicacion').value;

    const filteredData = data.filter(item => {
        const matchesSearch = item.aparato.toLowerCase().includes(searchText);
        const matchesLocation = !locationValue || item.ubicacion === locationValue;
        return matchesSearch && matchesLocation;
    });

    // Create a hidden container for the PDF content
    const printContainer = document.createElement('div');
    printContainer.style.padding = '20px';
    printContainer.style.fontFamily = "'Inter', sans-serif";
    printContainer.style.background = 'white';
    printContainer.style.color = 'black';

    const date = new Date().toLocaleDateString();

    printContainer.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 24px;">Investigación CSL - Inventario de Equipos</h1>
            <div style="text-align: right; font-size: 12px; color: #666;">
                <p>Fecha de Reporte: ${date}</p>
                <p>Total Equipos: ${filteredData.length}</p>
            </div>
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 10px;">
            <thead>
                <tr style="background: #f4f4f4;">
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">#</th>
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">APARATO</th>
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">N° SERIE</th>
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">UBICACIÓN</th>
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">CALIBRACIÓN</th>
                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">VENCIMIENTO</th>
                </tr>
            </thead>
            <tbody>
                ${filteredData.map((item, index) => {
        const expDate = calculateExpiration(item.calibracion);
        const expStr = expDate ? formatDate(expDate) : (item.vencimiento || 'N/A');
        return `
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 6px; width: 30px;">${index + 1}</td>
                            <td style="border: 1px solid #ddd; padding: 6px; font-weight: 600;">${item.aparato}</td>
                            <td style="border: 1px solid #ddd; padding: 6px;">${item.serie}</td>
                            <td style="border: 1px solid #ddd; padding: 6px;">${item.ubicacion}</td>
                            <td style="border: 1px solid #ddd; padding: 6px;">${item.calibracion || 'Pendiente'}</td>
                            <td style="border: 1px solid #ddd; padding: 6px;">${expStr}</td>
                        </tr>
                    `;
    }).join('')}
            </tbody>
        </table>
        <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px; font-size: 9px; color: #999; text-align: center;">
            <p>Sistema de Gestión de Laboratorio - Reporte Inteligente de Equipamiento</p>
        </div>
    `;

    const opt = {
        margin: [10, 10, 10, 10],
        filename: `Inventario_CSL_${new Date().toISOString().split('T')[0]}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };

    html2pdf().set(opt).from(printContainer).save();
}

// Bind PDF Button
document.getElementById('pdf-btn').onclick = exportToPDF;

// Initial Load
updateLocationFilter();
renderList();
