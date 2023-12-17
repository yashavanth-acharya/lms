import dbConnect from './bootstrap';

let isConnected = false;

export default async function dbMiddleware(req: any, res: any, next: () => void) {
  if (!isConnected) {
    await dbConnect();
    isConnected = true;
  }
  next();
}
