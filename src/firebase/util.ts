import { storage } from './index';
import {
	ref,
	uploadBytesResumable,
	getDownloadURL,
	deleteObject,
} from 'firebase/storage';

const deleteFile = (url: any, success: any, cb: any) => {
	let storageRef = ref(storage, url);
	// Create a reference to the file to delete
	const desertRef = ref(storage, `images/${storageRef.name}`);

	// Delete the file
	deleteObject(desertRef)
		.then(() => {
			success();
		})
		.catch((error: any) => {
			cb(error);
		});
};
const uploadFile = async (image: any, setProgress: any, setUrl: any) => {
	const storageRef = ref(storage, `images/${Date.now()}-${image.name}`);

	const metadata = {
		contentType: 'image/*',
	};

	const uploadTask = uploadBytesResumable(storageRef, image, metadata);

	uploadTask.on(
		'state_changed',
		(snapshot) => {
			const progress = Math.round(
				(snapshot.bytesTransferred / snapshot.totalBytes) * 100
			);
			setProgress(progress);
		},
		(error) => {
			console.log(error);
		},
		() => {
			getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
				setUrl(downloadURL);
			});
		}
	);
};

export { uploadFile, deleteFile };
