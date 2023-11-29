import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let isClosed = true;

export default function notificationMessage(type, images = 0) {
  //   if (!isClosed) {
  //     return;
  //   }

  isClosed = false;
  switch (type) {
    case 'error':
      errorMessage();
      break;
    case 'warningSQ':
      warningSQmessage();
      break;
    case 'warningEnd':
      warningEndMessage();
      break;
    case 'success':
      successMessage(images);
      break;

    default:
      break;
  }
}

function errorMessage() {
  iziToast.show({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again.',
    position: 'topRight',
    color: 'red',
    onClosed: function () {
      isClosed = true;
    },
  });
}

function warningSQmessage() {
  iziToast.show({
    title: 'Warning',
    message: 'Please enter your search query.',
    position: 'topRight',
    color: 'yellow',
    onClosed: function () {
      isClosed = true;
    },
  });
}

function warningEndMessage() {
  iziToast.show({
    title: 'Warning',
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
    color: 'yellow',
    onClosed: function () {
      isClosed = true;
    },
  });
}

function successMessage(images) {
  iziToast.show({
    title: 'Success',
    message: `Hooray! We found  ${images.totalHits} images.`,
    position: 'topRight',
    color: 'green',
    onClosed: function () {
      isClosed = true;
    },
  });
}
