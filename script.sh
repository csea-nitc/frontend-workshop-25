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
