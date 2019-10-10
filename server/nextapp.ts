import * as next from 'next';

const dev = process.env.NODE_ENV !== 'production';

const nextapp = next({ dir: '.', dev });

export default nextapp;
