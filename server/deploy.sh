set -euo pipefail

cd ~/app
git fetch origin main
git reset --hard origin/main
npm ci
npm run build
pm2 reload app --update-env