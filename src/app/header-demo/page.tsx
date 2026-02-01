import Header from '@/components/Header';

export default function HeaderDemo() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-[1280px] mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">Header Component Demo</h1>
                <p className="text-gray-600">
                    This page demonstrates the pixel-perfect Header component implementation.
                </p>
                <div className="mt-8 p-4 bg-white rounded-lg shadow h-[1000px]">
                    <p className="text-gray-400">Content area to demonstrate scrolling behavior (if header was sticky, but it's not required to be).</p>
                </div>
            </main>
        </div>
    );
}
