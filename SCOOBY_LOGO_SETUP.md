# Scooby Doo International School Logo Integration

## Quick Setup

### Step 1: Save the Logo
Save the Scooby Doo logo image (the circular logo with yellow border you attached) to:
```
/home/marc1705/Documents/GitHub/ges-dev/public/images/scooby-logo.png
```

### Step 2: That's It!
The code is already updated to use the logo in all the right places.

## Where the Logo Appears

### 1. Hero Section (Both Campuses)
- **Location**: Right side of the hero section
- **Size**: 192px × 192px (w-48 h-48)
- **Style**: Circular with white background and shadow
- **Pages**: ScoobyKatale.jsx and ScoobyGulu.jsx

### 2. Footer (Both Campuses)
- **Location**: Left column of footer, next to school name
- **Size**: Auto height, 64px (h-16)
- **Style**: With 12px right margin

### 3. Dynamic Favicon
- **Behavior**: Automatically changes when you visit Scooby pages
- **Restores**: Returns to GES favicon when you leave
- **Implementation**: Uses useEffect hook

## Logo Specifications

The logo image should be:
- **Format**: PNG (with transparency for best results)
- **Dimensions**: At least 192px × 192px (higher resolution recommended)
- **Colors**: Yellow (#FFD700) and Burgundy (#800E13)
- **Design**: Circular with "SCOOBY-DOO INTERNATIONAL SCHOOL UGANDA" text
- **Center**: Globe with book design

## Technical Details

### Files Modified
1. `/src/pages/institutions/ScoobyKatale.jsx`
   - Added `useEffect` import
   - Added favicon change on mount/unmount
   - Replaced gradient placeholder with `<img>` tag in hero
   - Added logo to footer

2. `/src/pages/institutions/ScoobyGulu.jsx`
   - Same changes as Katale campus
   - Different campus name only

### Code Features
- **Responsive**: Logo scales properly on mobile and desktop
- **Performance**: Uses `object-cover` for optimal rendering
- **Accessibility**: Includes proper alt text
- **UX**: Favicon changes provide visual context

## Fallback Behavior

If the logo file is missing:
- Browser will show broken image icon temporarily
- Save the logo and refresh - it will appear immediately
- No need to restart the dev server

## Testing Checklist

After saving the logo:
1. ✅ Visit http://localhost:5174/institutions/scooby-katale
2. ✅ Check hero section (right side) for logo
3. ✅ Scroll to footer and verify logo appears
4. ✅ Check browser tab for favicon change
5. ✅ Repeat for scooby-gulu page
6. ✅ Navigate away and confirm favicon restores

## Troubleshooting

**Logo not showing?**
- Verify file is saved as `/public/images/scooby-logo.png`
- Check file permissions: `ls -la public/images/scooby-logo.png`
- Hard refresh browser: Ctrl+Shift+R (Linux) or Cmd+Shift+R (Mac)

**Favicon not changing?**
- Clear browser cache
- Check browser console for errors
- Verify useEffect is running (no errors in console)

## Need Help?

The logo integration is complete in the code. Once you save the image file to the correct location, everything will work automatically!
