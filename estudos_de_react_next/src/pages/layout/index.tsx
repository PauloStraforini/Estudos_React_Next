import Grid from "@/components/layout/grid"

export default function PaginaLayout() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[90%] lg:w-4/5">
        <Grid sm={2} md={4}  lg={8}>
            <div className="h-24 w-full bg-purple-600">#1</div>
            <div className="h-24 w-full bg-rose-600">#2</div>
            <div className="h-24 w-full bg-blue-600">#3</div>
            <div className="h-24 w-full bg-red-600">#4</div>
            <div className="h-24 w-full bg-green-600">#5</div>
            <div className="h-24 w-full bg-yellow-600">#6</div>
            <div className="h-24 w-full bg-pink-600">#7</div>
            <div className="h-24 w-full bg-amber-950">#8</div>
        </Grid>
            </div>
        </div>
    )
}