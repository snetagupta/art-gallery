const PricingCard = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="border-b font-semibold text-3xl">Free</p>
      <p>For all your creative projects</p>
      <p className="font-semibold">
        $<span className="text-2xl">0</span>
      </p>
      <p>always</p>
      <button className="text-xl px-20 py-3  rounded-md border border-black">
        Get started
      </button>

      <div className="flex flex-col gap-6 py-4">
        <p>10 team members</p>
        <p>100GB</p>
        <p>
          Or 4000GB for qualified creatives with our Artist & Designer plan
          (requires portfolio)
        </p>
        <p>Unlimited collaborators</p>
        <p>Preview over 1,000 file types</p>
        <p>Unlimited shared links</p>
        <p>
          Up to 1 published page with custom logo, theming, expiration and
          watermark options
        </p>
        <p>100 mobile app uploads per month</p>
        <p>Import up to 4GB or 500 files at a time from Dropbox/Google Drive</p>
      </div>
    </div>
  );
};
export default PricingCard;
