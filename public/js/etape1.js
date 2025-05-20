const BASE_URL = 'http://localhost:8080/lab08a/api/';

async function testAPI() {
    console.log("=====================\n====== ÉTAPE 1 ======\n=====================");

    // Test de GET /api/albums
    let request = await fetch(`${BASE_URL}albums`);
    if (!request.ok) {
        console.error(`Erreur lors de la récupération des albums: ${request.status} ${request.statusText}`);
        return;
    }
    let albums = await request.json();
    console.log('Résultat de GET api/albums:', albums);

    // Test de GET /api/albums/{id}
    let albumId = albums[0].id;
    request = await fetch(`${BASE_URL}albums/${albumId}`);
    if (!request.ok) {
        console.error(`Erreur lors de la récupération de l'album ${albumId}: ${request.status} ${request.statusText}`);
        return;
    }
    let album = await request.json();
    console.log(`Résultat de GET api/albums/${albumId}:`, album);

    // Test de POST /api/albums
    /*let newAlbum = {
        "name": "Plages de sable",
        "featured_photo_id": 3
    };
    request = await fetch(`${BASE_URL}albums`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAlbum)
    });
    if (!request.ok) {
        console.error(`Erreur lors de la création de l'album: ${request.status} ${request.statusText}`);
        return;
    } else {
        let result = await request.json();
        console.log('Résultat de POST api/albums:', result);
    }*/

    // Test de PUT /api/albums/{id}
    let updatedAlbum = {
        "name": "Nouveau titre",
        "featured_photo_id": 5
    };
    request = await fetch(`${BASE_URL}albums/${albumId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedAlbum)
    });
    if (request.ok) {
        console.log("Requête PUT /api/albums/{id} réussie");
    } else {
        console.error(`Erreur lors de la mise à jour de l'album ${albumId}: ${request.status} ${request.statusText}`);
        return;
    }

    // Test de DELETE /api/albums/{id}
    /*request = await fetch(`${BASE_URL}albums/1`, {
        method: 'DELETE'
    });
    if (request.ok) {
        console.log("Requête DELETE /api/albums/{id} réussie");
    } else {
        console.error(`Erreur lors de la suppression de l'album ${albumId}: ${request.status} ${request.statusText}`);
        return;
    }*/

    // Test de GET /api/albums/{id}/photos
    request = await fetch(`${BASE_URL}albums/${albumId}/photos`);
    if (!request.ok) {
        console.error(`Erreur lors de la récupération des photos de l'album ${albumId}: ${request.status} ${request.statusText}`);
        return;
    }
    let photos = await request.json();
    console.log(`Résultat de GET api/albums/${albumId}/photos:`, photos);

    // Test de POST /api/albums/{id}/photos
    /*request = await fetch(`${BASE_URL}albums/2/photos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([2, 6, 8])
    });
    if (!request.ok) {
        console.error(`Erreur lors de l'ajout de photos à l'album 2: ${request.status} ${request.statusText}`);
        return;
    } else {
        console.log('Requête POST api/albums/{id}/photos réussie');
    }*/

    // Test de DELETE /api/albums/{id}/photos
    /*request = await fetch(`${BASE_URL}albums/2/photos/1`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!request.ok) {
        console.error(`Erreur lors de la suppression de la photo 1 de l'album 2: ${request.status} ${request.statusText}`);
        return;
    } else {
        console.log('Requête DELETE api/albums/{id}/photos/1 réussie');
    }*/
}

testAPI();
