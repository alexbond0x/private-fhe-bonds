# Vercel Deployment Guide for Private FHE Bonds

This guide provides step-by-step instructions for deploying the Private FHE Bonds platform to Vercel.

## Prerequisites

- GitHub account with access to the repository
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

## Step-by-Step Deployment

### 1. Prepare the Repository

Ensure your code is pushed to GitHub:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Connect to Vercel

1. **Visit Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "New Project" or "Import Project"
   - Select "Import Git Repository"
   - Choose `alexbond0x/private-fhe-bonds` from the list
   - Click "Import"

### 3. Configure Project Settings

1. **Project Name**
   - Set project name: `private-fhe-bonds`
   - Framework Preset: `Vite`
   - Root Directory: `./` (default)

2. **Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 4. Environment Variables

Add the following environment variables in Vercel dashboard:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

**To add environment variables:**
1. Go to Project Settings → Environment Variables
2. Add each variable with its value
3. Set environment to "Production", "Preview", and "Development"
4. Click "Save"

### 5. Deploy

1. **Automatic Deployment**
   - Click "Deploy" button
   - Vercel will automatically build and deploy your project
   - Wait for deployment to complete (usually 2-3 minutes)

2. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain if desired
   - Configure DNS settings as instructed

### 6. Verify Deployment

1. **Check Build Logs**
   - Review the build logs for any errors
   - Ensure all dependencies installed correctly

2. **Test the Application**
   - Visit the provided Vercel URL
   - Test wallet connection functionality
   - Verify all pages load correctly

## Post-Deployment Configuration

### 1. Update GitHub Repository

If you need to make changes:

```bash
# Make your changes
git add .
git commit -m "Update for production"
git push origin main
```

Vercel will automatically redeploy on push to main branch.

### 2. Monitor Performance

- Use Vercel Analytics to monitor performance
- Check Vercel Functions logs for any runtime errors
- Monitor build times and success rates

### 3. Environment Management

- **Production**: Uses production environment variables
- **Preview**: Uses preview environment variables (for pull requests)
- **Development**: Uses development environment variables

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (should be 18+)
   - Verify all dependencies are in package.json
   - Check for TypeScript errors

2. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names match exactly
   - Verify no typos in values

3. **Wallet Connection Issues**
   - Verify WalletConnect Project ID is correct
   - Check RPC URL is accessible
   - Ensure chain ID matches Sepolia (11155111)

### Build Optimization

1. **Bundle Size**
   - Use dynamic imports for large libraries
   - Optimize images and assets
   - Enable Vercel's automatic optimizations

2. **Performance**
   - Enable Vercel Edge Functions if needed
   - Use Vercel's CDN for static assets
   - Optimize for Core Web Vitals

## Security Considerations

1. **Environment Variables**
   - Never commit sensitive keys to repository
   - Use Vercel's environment variable system
   - Rotate keys regularly

2. **Smart Contract Security**
   - Audit FHE contract implementations
   - Test thoroughly on testnet before mainnet
   - Implement proper access controls

## Monitoring and Maintenance

1. **Regular Updates**
   - Keep dependencies updated
   - Monitor for security vulnerabilities
   - Test after each update

2. **Performance Monitoring**
   - Use Vercel Analytics
   - Monitor Core Web Vitals
   - Track user engagement metrics

## Support

For deployment issues:
- Check Vercel documentation
- Review build logs for specific errors
- Contact Vercel support if needed

For application issues:
- Review browser console for errors
- Test wallet connections thoroughly
- Verify smart contract interactions
