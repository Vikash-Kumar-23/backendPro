const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export { asyncHandler };


























// const asyncHandler = (fn) => (req, res, next) => {
//   try{
//     await fn(req, res, next);
//   }
//     catch (error) {
//         console.error('Error in async handler:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }