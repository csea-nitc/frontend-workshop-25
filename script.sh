# Remove conflicting packages if any
sudo apt remove --purge libnode-dev

# Clean up any remaining node.js packages
sudo apt remove --purge nodejs nodejs-doc

# Clean the package cache
sudo apt Clean

# Fix package database
sudo apt --fix-broken install

# Remove old node if it exists (safe)
sudo apt remove -y nodejs npm

# Update system
sudo apt update

# Add NodeSource repo for latest LTS Node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

# Install Node.js
sudo apt install -y nodejs

# Verify installation
node -v
npm -v
