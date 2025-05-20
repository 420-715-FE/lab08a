import AlbumsModel from "./albumsModel.js";

async function testAPI() {
    console.log("=====================\n====== ÉTAPE 2 ======\n=====================");
    const albumsModel = new AlbumsModel("http://localhost:8080/lab08a/api/");

    // Test getAll
    console.log("Test getAll");
    try {
        const albums = await albumsModel.getAll();
        console.log("Albums: ", albums);
    } catch (error) {
        console.error("Error in getAll: ", error);
    }

    // Test get
    console.log("Test get");
    try {
        const album = await albumsModel.get(1);
        console.log("Album: ", album);
    } catch (error) {
        console.error("Error in get: ", error);
    }

    // Test create
    /*console.log("Test create");
    try {
        const newAlbum = {
            'name': 'Plages de sable 2',
            'featured_photo_id': 3
        };
        const newAlbumId = await albumsModel.create(newAlbum);
        console.log("New album created with ID: ", newAlbumId);
    } catch (error) {
        console.error("Error in create: ", error);
    }*/

    // Test update
    /*console.log("Test update");
    try {
        const updatedAlbum = {
            'name': 'Nouveau titre 2',
            'featured_photo_id': 4
        };
        await albumsModel.update(1, updatedAlbum);
        console.log("Album updated successfully");
    } catch (error) {
        console.error("Error in update: ", error);
    }*/

    // Test delete
    /*console.log("Test delete");
    try {
        await albumsModel.delete(3);
        console.log("Album deleted successfully");
    } catch (error) {
        console.error("Error in delete: ", error);
    }*/

    // Test getPhotos
    console.log("Test getPhotos");
    try {
        const photos = await albumsModel.getPhotos(1);
        console.log("Photos: ", photos);
    } catch (error) {
        console.error("Error in getPhotos: ", error);
    }

    // Test addPhotos
    /*console.log("Test addPhotos");
    try {
        const photos = await albumsModel.addPhotos(2, [10]);
        console.log("Photos added successfully: ");
    } catch (error) {
        console.error("Error in addPhotos: ", error);
    }*/

    // Test removePhoto
    /*console.log("Test removePhoto");
    try {
        await albumsModel.removePhoto(1, 10);
        console.log("Photo removed successfully");
    } catch (error) {
        console.error("Error in removePhoto: ", error);
    }*/
}

testAPI();
