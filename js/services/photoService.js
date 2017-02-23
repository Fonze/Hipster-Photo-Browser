app.service('photoService', function() {
	
	var albums;
	var album;
	var photos;
	var users;
	
	return {
		areThereAlbums: areThereAlbums,
		areTherePhotos: areTherePhotos,
		areThereUsers: areThereUsers,
		getAllAlbums: getAllAlbums,
		setAllAlbums: setAllAlbums,
		setAllPhotos: setAllPhotos,
		getAlbum: getAlbum,
		setAlbum: setAlbum,
		getPhoto: getPhoto,
		setUsers: setUsers,
		getUser: getUser
	};
	
	function areThereAlbums() {
		if(albums != undefined) {
			return true;
		} else {
			return false;
		}
	}
	
	function areTherePhotos() {
		if(photos != undefined) {
			return true;
		} else {
			return false;
		}
	}
	
	function areThereUsers() {
		if(users != undefined) {
			return true;
		} else {
			return false;
		}
	}
	
	function setAllAlbums(newAlbums) {
		albums = newAlbums;
	}
	
	function getAllAlbums() {
		return albums;
	}
	
	function setAllPhotos(newPhotos) {
		photos = newPhotos;
	}
	
	function setAlbum(newAlbum) {
		album = newAlbum;
		album.photos = [];
		for(i = 0; i < photos.length; i++) {
			if(photos[i].albumId == album.id) {
				album.photos.push(photos[i]);
			} else if(photos[i].albumId > album.id) {
				break;
			}
		}
	}
	
	function getAlbum() {
		return album;
	}
	
	function getPhoto(albumId, index) {
		if(photos != undefined) {
			for(i = 0; i < photos.length; i++) {
				if(photos[i].albumId == albumId) {
					if(index == 0) {
						return photos[i];
					} else {
						index--;
					}
				}
			}
		}
	}
	
	function setUsers(newUsers) {
		users = newUsers;
	}
	
	function getUser(id) {
		for(i = 0; i < users.length; i++) {
			if(users[i].id == id) {
				return users[i];
			}
		}
	}
	
});